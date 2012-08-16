
import unittest
import random
import json

import syncserver

from webtest import TestApp


class TestSyncServer(unittest.TestCase):

    def get_app(self):
        return TestApp(syncserver.application)

    def setUp(self):
        userid = random.randint(1, 10000)
        self.root = "/test_user_%d/bookmarks" % (userid,)

        self.app = self.get_app()
        self.app.delete(self.root)

    def test_post_then_get(self):
        items = json.dumps({
            "test1": "TEST DATA",
            "test2": "MORE TEST DATA",
        })
        self.app.post(self.root, items, headers={
            "Content-Type": "application/json"
        })

        r = self.app.get(self.root)
        items = json.loads(r.body)
        self.assertEquals(items["test1"], "TEST DATA")
        self.assertEquals(items["test2"], "MORE TEST DATA")

    def test_get_item_newer_than_x(self):
        r1 = self.app.post_json(self.root,
                                {"test1": "TEST DATA"})
        r2 = self.app.post_json(self.root,
                                {"test2": "MORE TEST DATA"})
        self.assertNotEquals(r1.headers["X-Last-Modified"],
                             r2.headers["X-Last-Modified"])

        ts = r1.headers["X-Last-Modified"]
        r = self.app.get(self.root + "?newer=" + ts)
        self.assertTrue("test1" not in r.json)
        self.assertTrue("test2" in r.json)

        ts = r2.headers["X-Last-Modified"]
        r = self.app.get(self.root + "?newer=" + ts)
        self.assertTrue("test1" not in r.json)
        self.assertTrue("test2" not in r.json)


if __name__ == "__main__":

    import sys
    import nose
    from wsgiproxy.app import WSGIProxyApp

    class LiveTestSyncServer(TestSyncServer):

        def get_app(self):
            application = WSGIProxyApp(sys.argv[1])
            return TestApp(application, extra_environ={
                "REMOTE_ADDR": "1.2.3.4"
            })

    suite = unittest.makeSuite(LiveTestSyncServer)
    nose.main(suite=suite)
