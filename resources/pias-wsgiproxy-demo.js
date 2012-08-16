var pias_wsgiproxy_demo_data = {
  "events": [
    {
      "act": "OPEN", 
      "size": [
        60, 
        16
      ], 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.49013304710388184
    }, 
    {
      "act": "WRITE", 
      "data": "rfk@durian:pycon$ ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\nrfk@durian:pycon$ ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "python\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.03306889533996582
    }, 
    {
      "act": "WRITE", 
      "data": "Python 2.7.3 (default, Aug  1 2012, 05:16:07) \r\n[GCC 4.6.3] on linux2\r\nType \"help\", \"copyright\", \"credits\" or \"license\" for more information.\r\n>>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "from wsgiproxy.app import WSGIProxyApp\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0985269546508789
    }, 
    {
      "act": "WRITE", 
      "data": ">>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "g = WSGIProxyApp(\"http://google.com\")\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "g({\"REQUEST\"", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[K", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "_METHOD\": \"GET\", \"REMOTE_ADDR\": \"1.2.3.4\"}, l", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": " \r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "ambda *a: None)\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.033392906188964844
    }, 
    {
      "act": "WRITE", 
      "data": "Traceback (most recent call last):\r\n  File \"<stdin>\", line 1, in <module>\r\n  File \"/usr/local/lib/python2.7/dist-packages/wsgiproxy/app.py\", line 78, in __call__\r\n    environ = self.encode_environ(environ)\r\n  File \"/usr/local/lib/python2.7/dist-packages/wsgiproxy/app.py\", line 118, in encode_environ\r\n    environ['HTTP_%s' % dest] = environ[key]\r\nKeyError: 'wsgi.url_scheme'\r\n>>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "from webtest import TestApp\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.04292607307434082
    }, 
    {
      "act": "WRITE", 
      "data": ">>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "a[[ ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[K", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[K", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[K", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "pp = TestApp(g)", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[K", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": ", extra_environ={\"REMOTE_ADDR\": \"1.2.3.4\"", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": " \r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "})\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "app.get(\"/e", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[K", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "search+", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[K", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "ECHO", 
      "data": "?q=python\")\r", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "PAUSE", 
      "duration": 1.9138741493225098
    }, 
    {
      "act": "WRITE", 
      "data": "<301 Moved Permanently text/html location: http://www.google.com/search?q=python body='<HTML><HE...\\r\\n'/234>\r\n>>> ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u0004", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.00878000259399414
    }, 
    {
      "act": "WRITE", 
      "data": "rfk@durian:pycon$ ", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "READ", 
      "data": "\u0004", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "WRITE", 
      "data": "exit\r\n", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }, 
    {
      "act": "CLOSE", 
      "term": "da7c5b3fc826402bb93227907cc99e32"
    }
  ]
}
