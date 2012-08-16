var pias_webtest_demo_data = {
  "events": [
    {
      "act": "OPEN", 
      "size": [
        60, 
        16
      ], 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.41643309593200684
    }, 
    {
      "act": "WRITE", 
      "data": "rfk@rambutan:pycon$ ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "python\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.02585291862487793
    }, 
    {
      "act": "WRITE", 
      "data": "Python 2.7.3 (default, Aug  1 2012, 05:14:39) \r\n[GCC 4.6.3] on linux2\r\nType \"help\", \"copyright\", \"credits\" or \"license\" for more information.\r\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "def hello_app(environ, start_response):\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n... ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "    start_response(\"200 OK\", [])\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n... ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "    return [\"Hello!\"]\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n... ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "hello_app({\"PATH_INFO\": \"/\"}, lambda *a: None)\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n['Hello!']\r\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "from webtest import TestApp\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "app = TestApp(hello_app)\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "ECHO", 
      "data": "app.get(\"/\")\r", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\n<200 OK text/html body='Hello!'>\r\n>>> ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "READ", 
      "data": "\u0004", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.015158891677856445
    }, 
    {
      "act": "WRITE", 
      "data": "rfk@rambutan:pycon$ ", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "READ", 
      "data": "\u0004", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "WRITE", 
      "data": "exit\r\n", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }, 
    {
      "act": "CLOSE", 
      "term": "8831c2e76f4e4b06b158f8d970b4ddca"
    }
  ]
}
