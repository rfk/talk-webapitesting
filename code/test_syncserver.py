
import unittest
import random
import json

from webtest import TestApp


class TestSyncServer(unittest.TestCase):

    def make_wsgi_app(self):
        from syncserver import application
        return application

    def setUp(self):
        self.app = TestApp(self.make_wsgi_app(), extra_environ={
            "REMOTE_ADDR": "127.0.0.1",
        })
        self.root = "/test_user_%d/bookmarks" % (random.randint(1, 10000))
        self.app.delete(self.root)

    def test_post_then_get(self):
        items = {
            "test1": "TEST DATA",
            "test2": "MORE TEST DATA",
        }
        self.app.post(self.root, json.dumps(items), headers={
            "Content-Type": "application/json"
        })

        r = self.app.get(self.root)
        items = json.loads(r.body)
        self.assertEquals(items["test1"], "TEST DATA")
        self.assertEquals(items["test2"], "MORE TEST DATA")

    def test_get_item_newer_than_x(self):
        r1 = self.app.post_json(self.root, {"test1": "TEST DATA"})
        r2 = self.app.post_json(self.root, {"test2": "MORE TEST DATA"})
        self.assertNotEquals(r1.headers["X-Last-Modified"],
                             r2.headers["X-Last-Modified"])

        r = self.app.get(self.root)
        self.assertTrue("test1" in r.json)
        self.assertTrue("test2" in r.json)

        r = self.app.get(self.root + "?newer=" + r1.headers["X-Last-Modified"])
        self.assertTrue("test1" not in r.json)
        self.assertTrue("test2" in r.json)

        r = self.app.get(self.root + "?newer=" + r2.headers["X-Last-Modified"])
        self.assertTrue("test1" not in r.json)
        self.assertTrue("test2" not in r.json)


if __name__ == "__main__":

    import sys
    import nose
    from wsgiproxy.app import WSGIProxyApp

    class LiveTestSyncServer(TestSyncServer):

        def make_wsgi_app(self):
            return WSGIProxyApp(sys.argv[1])

    nose.main(suite=unittest.makeSuite(LiveTestSyncServer))
