

from funkload.FunkLoadTestCase import FunkLoadTestCase
from funkload.utils import Data

from urlparse import urlparse
from webob import Request

from test_syncserver import TestSyncServer, TestApp


class EVERYTHING(object):

    def __contains__(self, anything):
        return True


class LoadTest(FunkLoadTestCase, TestSyncServer):

    def get_app(self):
        return TestApp(self.wsgi_to_funkload)


    def wsgi_to_funkload(self, environ, start_response):
        url = urlparse(self.conf_get("main", "url"))
        environ["HTTP_HOST"] = url.netloc
        environ["wsgi.urlscheme"] = url.scheme or "http"
        environ["SERVER_NAME"] = url.hostname
        req = Request(environ)
        # Allow all response codes.
        self.ok_codes = EVERYTHING()
        # Set headers based on the request.
        self.clearHeaders()
        for header, value in req.headers.iteritems():
            if header.lower() not in ("host",):
                self.setHeader(header, value)
        # Perform request with given data if any.
        data = Data(req.content_type, req.body)
        response = self.method(req.method, req.url, data)
        # Report the response.
        start_response("%d %s" % (response.code, response.message),
                       response.headers.items())
        return (response.body or "",)

