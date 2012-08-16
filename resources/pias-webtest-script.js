var pias_webtest_script_data = {
  "events": [
    {
      "act": "OPEN", 
      "size": [
        60, 
        16
      ], 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.4821808338165283
    }, 
    {
      "act": "WRITE", 
      "data": "rfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\nrfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "vim syncser", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "ver.py ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.03133988380432129
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?1h\u001b=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.00042510032653808594
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;16r\u001b[m\u001b[m\u001b[0m\u001b[H\u001b[J\u001b[16;1H\"syncserver.py\" 94L, 2476C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0020520687103271484
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[2;1H\u001b[4mimport\u001b[m os\r\n\u001b[4mimport\u001b[m time\r\n\u001b[4mimport\u001b[m json\r\n\u001b[4mimport\u001b[m sqlite3\r\n\u001b[4mfrom\u001b[m uuid \u001b[4mimport\u001b[m uuid4\r\n\r\n\u001b[4mfrom\u001b[m bottle \u001b[4mimport\u001b[m Bottle, request, response, run\r\n\r\n\r\napplication = Bottle(catchall=\u001b[4mFalse\u001b[m)\r\n\r\n\r\ndb = sqlite3.connect(\u001b[4m\"/tmp/sync-%s.db\"\u001b[m % (uuid4().\u001b[4mhex\u001b[m,))\u001b[16;43H1,0-1\u001b[9CTop\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[1;1H\u001b[16;33H^[\u001b[1;1H\u001b[16;35HO\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[1;1H\u001b[16;33H~@k\u001b[1;1H\u001b[16;33H   \u001b[2;1H\u001b[16;43H2,1  \u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[2;1H\u001b[16;33H^[\u001b[2;1H\u001b[16;35HO\u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[2;1H\u001b[16;33H~@k\u001b[2;1H\u001b[16;33H   \u001b[3;1H\u001b[16;43H3\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[3;1H\u001b[16;33H^[\u001b[3;1H\u001b[16;35HO\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[3;1H\u001b[16;33H~@k\u001b[3;1H\u001b[16;33H   \u001b[4;1H\u001b[16;43H4\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[4;1H\u001b[16;33H^[\u001b[4;1H\u001b[16;35HO\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[4;1H\u001b[16;33H~@k\u001b[4;1H\u001b[16;33H   \u001b[5;1H\u001b[16;43H5\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[5;1H\u001b[16;33H^[\u001b[5;1H\u001b[16;35HO\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[5;1H\u001b[16;33H~@k\u001b[5;1H\u001b[16;33H   \u001b[6;1H\u001b[16;43H6\u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[6;1H\u001b[16;33H^[\u001b[6;1H\u001b[16;35HO\u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[6;1H\u001b[16;33H~@k\u001b[6;1H\u001b[16;33H   \u001b[7;1H\u001b[16;43H7,0-1\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[7;1H\u001b[16;33H^[\u001b[7;1H\u001b[16;35HO\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[7;1H\u001b[16;33H~@k\u001b[7;1H\u001b[16;33H   \u001b[8;1H\u001b[16;43H8,1  \u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[8;1H\u001b[16;33H^[\u001b[8;1H\u001b[16;35HO\u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[8;1H\u001b[16;33H~@k\u001b[8;1H\u001b[16;33H   \u001b[9;1H\u001b[16;43H9,0-1\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[9;1H\u001b[16;33H^[\u001b[9;1H\u001b[16;35HO\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[9;1H\u001b[16;33H~@k\u001b[9;1H\u001b[16;33H   \u001b[10;1H\u001b[16;43H10,0-1\u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[10;1H\u001b[16;33H^[\u001b[10;1H\u001b[16;35HO\u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[10;1H\u001b[16;33H~@k\u001b[10;1H\u001b[16;33H   \u001b[11;1H\u001b[16;44H1,1  \u001b[11;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[11;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[11;1H\u001b[16;33H^[\u001b[11;1H\u001b[16;35HO\u001b[11;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[11;1H\u001b[16;33H~@k\u001b[11;1H\u001b[16;33H   \u001b[12;1H\u001b[16;44H2,0-1\u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[12;1H\u001b[16;33H^[\u001b[12;1H\u001b[16;35HO\u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[12;1H\u001b[16;33H~@k\u001b[12;1H\u001b[16;33H   \u001b[13;1H\u001b[16;44H3\u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[13;1H\u001b[16;33H^[\u001b[13;1H\u001b[16;35HO\u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[13;1H\u001b[16;33H~@k\u001b[13;1H\u001b[16;33H   \u001b[14;1H\u001b[16;44H4,1  \u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[14;1H\u001b[16;33H^[\u001b[14;1H\u001b[16;35HO\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[14;1H\u001b[16;33H~@k\u001b[14;1H\u001b[16;33H   \u001b[15;1H\u001b[16;44H5,0-1\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;1Hdb.execute(\u001b[4m\"CREATE TABLE IF NOT EXISTS items (\"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;1H\u001b[K\u001b[16;43H16,1\u001b[11C1%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;11H \u001b[4m\"   username STRING NOT NULL, \"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H17,1\u001b[11C2%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;11H \u001b[4m\"   collection STRING NOT NULL, \"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H18,1\u001b[11C3%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;11H \u001b[4m\"   item STRING NOT NULL, \"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H19,1\u001b[11C5%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;11H \u001b[4m\"   payload STRING NOT NULL, \"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H20,1\u001b[11C6%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;11H \u001b[4m\"   modified INTEGER NOT NULL, \"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H21,1\u001b[11C7%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;11H \u001b[4m\"PRIMARY KEY (username, collection, item))\"\u001b[m)\u001b[16;43H\u001b[K\u001b[16;43H22,1\u001b[11C8%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H23,0-1\u001b[8C10%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H24,0-1\u001b[8C11%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;1H\u001b[4m@application.post\u001b[m(\u001b[4m\"/<username>/<collection>\"\u001b[m)\u001b[16;43H\u001b[K\u001b[16;43H25,1\u001b[10C12%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;1H\u001b[1mdef\u001b[0m \u001b[4mpost_collection\u001b[m(username, collection):\u001b[16;43H\u001b[K\u001b[16;43H26,1\u001b[10C13%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H27,0-1\u001b[8C15%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H query = \u001b[4m\"INSERT OR REPLACE INTO items VALUES \"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H28,1\u001b[10C16%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\"(:username, :collection, :item, \"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H29,1\u001b[10C17%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\":payload, :modified) \"\u001b[m\u001b[16;43H\u001b[K\u001b[16;43H30,1\u001b[10C18%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H31,0-1\u001b[8C20%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H modified = \u001b[4mint\u001b[m(time.time() * \u001b[4m1000000\u001b[m)\u001b[16;43H\u001b[K\u001b[16;43H32,1\u001b[10C21%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H payloads = json.loads(request.body.read())\u001b[16;43H\u001b[K\u001b[16;43H33,1\u001b[10C22%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H \u001b[1mfor\u001b[0m item \u001b[1min\u001b[0m payloads:\u001b[16;43H\u001b[K\u001b[16;43H34,1\u001b[10C24%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H db.execute(query, {\u001b[16;43H\u001b[K\u001b[16;43H35,1\u001b[10C25%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\"username\"\u001b[m: username,\u001b[16;43H\u001b[K\u001b[16;43H36,1\u001b[10C26%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\"collection\"\u001b[m: collection,\u001b[16;43H\u001b[K\u001b[16;43H37,1\u001b[10C27%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\"item\"\u001b[m: item,\u001b[16;43H\u001b[K\u001b[16;43H38,1\u001b[10C29%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\"payload\"\u001b[m: payloads[item],\u001b[16;43H\u001b[K\u001b[16;43H39,1\u001b[10C30%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\"modified\"\u001b[m: modified\u001b[16;43H\u001b[K\u001b[16;43H40,1\u001b[10C31%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H })\u001b[16;43H\u001b[K\u001b[16;43H41,1\u001b[10C32%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H42,0-1\u001b[8C34%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H response.set_header(\u001b[4m\"X-Last-Modified\"\u001b[m, \u001b[4mstr\u001b[m(modified))\u001b[16;43H\u001b[K\u001b[16;43H43,1\u001b[10C35%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H \u001b[1mreturn\u001b[0m \u001b[4mNone\u001b[m\u001b[16;43H\u001b[K\u001b[16;43H44,1\u001b[10C36%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H45,0-1\u001b[8C37%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H46,0-1\u001b[8C39%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;1H\u001b[4m@application.get\u001b[m(\u001b[4m\"/<username>/<collection>\"\u001b[m)\u001b[16;43H\u001b[K\u001b[16;43H47,1\u001b[10C40%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;1H\u001b[1mdef\u001b[0m \u001b[4mget_collection\u001b[m(username, collection):\u001b[16;43H\u001b[K\u001b[16;43H48,1\u001b[10C41%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H49,0-1\u001b[8C43%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H query = \u001b[4m\"SELECT item, payload FROM items\"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H50,1\u001b[10C44%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\" WHERE username=:username\"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H51,1\u001b[10C45%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\" AND collection=:collection\"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H52,1\u001b[10C46%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\" AND modified > :newer\"\u001b[m\u001b[16;43H\u001b[K\u001b[16;43H53,1\u001b[10C48%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H54,0-1\u001b[8C49%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H rows = db.execute(query, {\u001b[16;43H\u001b[K\u001b[16;43H55,1\u001b[10C50%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H \u001b[4m\"username\"\u001b[m: username,\u001b[16;43H\u001b[K\u001b[16;43H56,1\u001b[10C51%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H \u001b[4m\"collection\"\u001b[m: collection,\u001b[16;43H\u001b[K\u001b[16;43H57,1\u001b[10C53%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H \u001b[4m\"newer\"\u001b[m: \u001b[4mint\u001b[m(request.query.newer \u001b[1mor\u001b[0m \u001b[4m0\u001b[m)\u001b[16;43H\u001b[K\u001b[16;43H58,1\u001b[10C54%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H })\u001b[16;43H\u001b[K\u001b[16;43H59,1\u001b[10C55%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H60,0-1\u001b[8C56%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H items = {}\u001b[16;43H\u001b[K\u001b[16;43H61,1\u001b[10C58%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H \u001b[1mfor\u001b[0m row \u001b[1min\u001b[0m rows:\u001b[16;43H\u001b[K\u001b[16;43H62,1\u001b[10C59%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H items[row[\u001b[4m0\u001b[m]] = row[\u001b[4m1\u001b[m]\u001b[16;43H\u001b[K\u001b[16;43H63,1\u001b[10C60%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H64,0-1\u001b[8C62%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H query = \u001b[4m\"SELECT MAX(modified) FROM items\"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H65,1\u001b[10C63%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\" WHERE username=:username\"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H66,1\u001b[10C64%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\" AND collection=:collection\"\u001b[m\u001b[16;43H\u001b[K\u001b[16;43H67,1\u001b[10C65%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H r = db.execute(query, {\u001b[16;43H\u001b[K\u001b[16;43H68,1\u001b[10C67%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H \u001b[4m\"username\"\u001b[m: username,\u001b[16;43H\u001b[K\u001b[16;43H69,1\u001b[10C68%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H \u001b[4m\"collection\"\u001b[m: collection\u001b[16;43H\u001b[K\u001b[16;43H70,1\u001b[10C69%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H })\u001b[16;43H\u001b[K\u001b[16;43H71,1\u001b[10C70%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H last_modified = r.fetchone()\u001b[16;43H\u001b[K\u001b[16;43H72,1\u001b[10C72%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H \u001b[1mif\u001b[0m last_modified \u001b[1mis\u001b[0m \u001b[4mNone\u001b[m:\u001b[16;43H\u001b[K\u001b[16;43H73,1\u001b[10C73%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H last_modified = \u001b[4m0\u001b[m\u001b[16;43H\u001b[K\u001b[16;43H74,1\u001b[10C74%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H75,0-1\u001b[8C75%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H response.set_header(\u001b[4m\"X-Last-Modified\"\u001b[m,\u001b[16;43H\u001b[K\u001b[16;43H76,1\u001b[10C77%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;24H \u001b[4mstr\u001b[m(last_modified))\u001b[16;43H\u001b[K\u001b[16;43H77,1\u001b[10C78%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H \u001b[1mreturn\u001b[0m items\u001b[16;43H\u001b[K\u001b[16;43H78,1\u001b[10C79%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H79,0-1\u001b[8C81%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H80,0-1\u001b[8C82%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;1H\u001b[4m@application.delete\u001b[m(\u001b[4m\"/<username>/<collection>\"\u001b[m)\u001b[16;43H\u001b[K\u001b[16;43H81,1\u001b[10C83%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;1H\u001b[1mdef\u001b[0m \u001b[4mdelete_collection\u001b[m(username, collection):\u001b[16;43H\u001b[K\u001b[16;43H82,1\u001b[10C84%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H query = \u001b[4m\"DELETE FROM items\"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H83,1\u001b[10C86%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\" WHERE username=:username\"\u001b[m\u001b[1m\\\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H84,1\u001b[10C87%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;12H \u001b[4m\" AND collection=:collection\"\u001b[m\u001b[16;43H\u001b[K\u001b[16;43H85,1\u001b[10C88%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H db.execute(query, {\u001b[16;43H\u001b[K\u001b[16;43H86,1\u001b[10C89%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H \u001b[4m\"username\"\u001b[m: username,\u001b[16;43H\u001b[K\u001b[16;43H87,1\u001b[10C91%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H \u001b[4m\"collection\"\u001b[m: collection,\u001b[16;43H\u001b[K\u001b[16;43H88,1\u001b[10C92%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H })\u001b[16;43H\u001b[K\u001b[16;43H89,1\u001b[10C93%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H \u001b[1mreturn\u001b[0m \u001b[4mNone\u001b[m\u001b[16;43H\u001b[K\u001b[16;43H90,1\u001b[10C94%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H91,0-1\u001b[8C96%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H92,0-1\u001b[8C97%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;1H\u001b[1mif\u001b[0m __name__ == \u001b[4m\"__main__\"\u001b[m:\u001b[16;43H\u001b[K\u001b[16;43H93,1\u001b[10C98%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H run(application, host=\u001b[4m\"192.168.0.3\"\u001b[m, port=\u001b[4m8080\u001b[m)\u001b[16;43H\u001b[K\u001b[16;43H94,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u0007\u001b[16;33H   \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u0007\u001b[16;33H:\u001b[15;1H\u001b[16;33H\u001b[K\u001b[16;1H:", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "q!\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?1l\u001b>\u001b[16;1H\u001b[K\u001b[16;1Hrfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\nrfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "vim test_sy", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "ncserver.py ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0332179069519043
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?1h\u001b=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0006690025329589844
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;16r\u001b[m\u001b[m\u001b[0m\u001b[H\u001b[J\u001b[16;1H\"test_syncserver.py\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 8.893013000488281e-05
    }, 
    {
      "act": "WRITE", 
      "data": " 10L, 93C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.002569913864135742
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[2;1H\u001b[4mimport\u001b[m unittest\r\n\u001b[4mimport\u001b[m random\r\n\u001b[4mimport\u001b[m json\r\n\r\n\u001b[4mimport\u001b[m syncserver\r\n\r\n\u001b[4mfrom\u001b[m webtest \u001b[4mimport\u001b[m TestApp\r\n\r\n\r\n\u001b[1m~\r\n~\r\n~\r\n~\r\n~\u001b[0m\u001b[16;43H1,0-1\u001b[9CAll\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[1;1H\u001b[16;33H^[\u001b[1;1H\u001b[16;35HO\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[1;1H\u001b[16;33H~@k\u001b[1;1H\u001b[16;33H   \u001b[2;1H\u001b[16;43H2,1  \u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[2;1H\u001b[16;33H^[\u001b[2;1H\u001b[16;35HO\u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[2;1H\u001b[16;33H~@k\u001b[2;1H\u001b[16;33H   \u001b[3;1H\u001b[16;43H3\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[3;1H\u001b[16;33H^[\u001b[3;1H\u001b[16;35HO\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[3;1H\u001b[16;33H~@k\u001b[3;1H\u001b[16;33H   \u001b[4;1H\u001b[16;43H4\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[4;1H\u001b[16;33H^[\u001b[4;1H\u001b[16;35HO\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[4;1H\u001b[16;33H~@k\u001b[4;1H\u001b[16;33H   \u001b[5;1H\u001b[16;43H5,0-1\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[5;1H\u001b[16;33H^[\u001b[5;1H\u001b[16;35HO\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[5;1H\u001b[16;33H~@k\u001b[5;1H\u001b[16;33H   \u001b[6;1H\u001b[16;43H6,1  \u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[6;1H\u001b[16;33H^[\u001b[6;1H\u001b[16;35HO\u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[6;1H\u001b[16;33H~@k\u001b[6;1H\u001b[16;33H   \u001b[7;1H\u001b[16;43H7,0-1\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[7;1H\u001b[16;33H^[\u001b[7;1H\u001b[16;35HO\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[7;1H\u001b[16;33H~@k\u001b[7;1H\u001b[16;33H   \u001b[8;1H\u001b[16;43H8,1  \u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[8;1H\u001b[16;33H^[\u001b[8;1H\u001b[16;35HO\u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[8;1H\u001b[16;33H~@k\u001b[8;1H\u001b[16;33H   \u001b[9;1H\u001b[16;43H9,0-1\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[9;1H\u001b[16;33H^[\u001b[9;1H\u001b[16;35HO\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[9;1H\u001b[16;33H~@k\u001b[9;1H\u001b[16;33H   \u001b[10;1H\u001b[16;43H10,0-1\u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H^M\u001b[10;1H\u0007\u001b[16;33H  \u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[10;1H\u0007\u001b[16;33Ho\u001b[10;1H\u001b[16;33H \u001b[11;1H\u001b[16;1H\u001b[1m-- INSERT --\u001b[0m\u001b[16;13H\u001b[K\u001b[16;43H11,1\u001b[10CAll\u001b[11;1H\u001b[K\u001b[11;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "c", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[11;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bcl\u001b[16;46H3\u001b[11;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bla\u001b[16;46H4\u001b[11;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bas\u001b[16;46H5\u001b[11;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\u001b[1mclass\u001b[0m\u001b[16;46H6\u001b[11;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[11;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4mT\u001b[m\u001b[16;46H8\u001b[11;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTe\u001b[m\u001b[16;46H9\u001b[11;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;46H10\u001b[11;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H1\u001b[11;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "S", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mtS\u001b[m\u001b[16;47H2\u001b[11;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "y", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mSy\u001b[m\u001b[16;47H3\u001b[11;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4myn\u001b[m\u001b[16;47H4\u001b[11;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "c", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mnc\u001b[m\u001b[16;47H5\u001b[11;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "S", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mcS\u001b[m\u001b[16;47H6\u001b[11;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mSe\u001b[m\u001b[16;47H7\u001b[11;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mer\u001b[m\u001b[16;47H8\u001b[11;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "v", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mrv\u001b[m\u001b[16;47H9\u001b[11;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mve\u001b[m\u001b[16;46H20\u001b[11;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mer\u001b[m\u001b[16;47H1\u001b[11;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mr\u001b[m(\u001b[16;47H2\u001b[11;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(u\u001b[16;47H3\u001b[11;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bun\u001b[16;47H4\u001b[11;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bni\u001b[16;47H5\u001b[11;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bit\u001b[16;47H6\u001b[11;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\btt\u001b[16;47H7\u001b[11;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bte\u001b[16;47H8\u001b[11;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bes\u001b[16;47H9\u001b[11;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bst\u001b[16;46H30\u001b[11;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt.\u001b[16;47H1\u001b[11;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.T\u001b[16;47H2\u001b[11;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bTe\u001b[16;47H3\u001b[11;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bes\u001b[16;47H4\u001b[11;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bst\u001b[16;47H5\u001b[11;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\btC\u001b[16;47H6\u001b[11;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bCa\u001b[16;47H7\u001b[11;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bas\u001b[16;47H8\u001b[11;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H9\u001b[11;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\be)\u001b[16;46H40\u001b[11;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b):\u001b[16;47H1\u001b[11;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[12;1H\u001b[K\u001b[16;44H2,1 \u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[13;1H\u001b[K\u001b[16;44H3\u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[13;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[13;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[13;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[13;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b d\u001b[16;46H6\u001b[13;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;46H7\u001b[13;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\u001b[1mdef\u001b[0m\u001b[16;46H8\u001b[13;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[13;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4ms\u001b[m\u001b[16;46H10\u001b[13;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mse\u001b[m\u001b[16;47H1\u001b[13;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4met\u001b[m\u001b[16;47H2\u001b[13;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "U", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mtU\u001b[m\u001b[16;47H3\u001b[13;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mUp\u001b[m\u001b[16;47H4\u001b[13;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mp\u001b[m(\u001b[16;47H5\u001b[13;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H6\u001b[13;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H7\u001b[13;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H8\u001b[13;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H9\u001b[13;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf)\u001b[16;46H20\u001b[13;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b):\u001b[16;47H1\u001b[13;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[14;1H\u001b[K\u001b[16;44H4,1 \u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[14;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[14;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[14;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[14;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[14;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[14;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[14;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[14;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b u\u001b[16;46H10\u001b[14;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bus\u001b[16;47H1\u001b[14;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H2\u001b[14;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H3\u001b[14;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bri\u001b[16;47H4\u001b[14;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bid\u001b[16;47H5\u001b[14;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[14;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H7\u001b[14;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[14;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;47H9\u001b[14;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bra\u001b[16;46H20\u001b[14;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ban\u001b[16;47H1\u001b[14;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bnd\u001b[16;47H2\u001b[14;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bdo\u001b[16;47H3\u001b[14;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bom\u001b[16;47H4\u001b[14;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bm.\u001b[16;47H5\u001b[14;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H6\u001b[14;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bra\u001b[16;47H7\u001b[14;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ban\u001b[16;47H8\u001b[14;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bnd\u001b[16;47H9\u001b[14;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bdi\u001b[16;46H30\u001b[14;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bin\u001b[16;47H1\u001b[14;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bnt\u001b[16;47H2\u001b[14;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt(\u001b[16;47H3\u001b[14;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(\u001b[4m1\u001b[m\u001b[16;47H4\u001b[14;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m1\u001b[m,\u001b[16;47H5\u001b[14;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[14;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m1\u001b[m\u001b[16;47H7\u001b[14;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "0", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m10\u001b[m\u001b[16;47H8\u001b[14;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "0", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m00\u001b[m\u001b[16;47H9\u001b[14;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "0", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m00\u001b[m\u001b[16;46H40\u001b[14;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "0", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m00\u001b[m\u001b[16;47H1\u001b[14;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m0\u001b[m)\u001b[16;47H2\u001b[14;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;1H\u001b[K\u001b[16;44H5,1 \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boo\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "/", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"/\u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m/t\u001b[m\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt_\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_u\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mus\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mse\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mer\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mr_\u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "%", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_%\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m%d\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "/", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4md/\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m/b\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mbo\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4moo\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "k", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mok\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mkm\u001b[m\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mma\u001b[m\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mar\u001b[m\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "k", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mrk\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mks\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4ms\"\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "%", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b %\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b (\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(u\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bus\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H4\u001b[15;54H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bri\u001b[16;47H5\u001b[15;55H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bid\u001b[16;47H6\u001b[15;56H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bd,\u001b[16;47H7\u001b[15;57H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b,)\u001b[16;47H8\u001b[15;58H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H16,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H17,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;22H\u001b[K\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;21H\u001b[K\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bsT\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;21H\u001b[K\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;20H\u001b[K\u001b[16;47H0\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b T\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bTe\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bes\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bst\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\btA\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bAp\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp(\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "y", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bsy\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\byn\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "c", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bnc\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bcs\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "v", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\brv\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bve\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br.\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpl\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bli\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "c", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bic\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bca\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bat\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bti\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bio\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn)\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H18,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp.\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.d\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\u001b[1mdel\u001b[0m\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\bdele\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bet\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bte\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\be(\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boo\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt)\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H19,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H20,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b d\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\u001b[1mdef\u001b[0m\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4mt\u001b[m\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt_\u001b[m\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_p\u001b[m\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mpo\u001b[m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mos\u001b[m\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt_\u001b[m\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_t\u001b[m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "h", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mth\u001b[m\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mhe\u001b[m\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4men\u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "+", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mn\u001b[m+\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;23H\u001b[K\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mn_\u001b[m\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "g", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_g\u001b[m\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mge\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4met\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt\u001b[m(\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf)\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b):\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H21,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b i\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bit\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bte\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bem\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bms\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b j\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bjs\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bso\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn.\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.d\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bdu\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bum\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bmp\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bps\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs(\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "{", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b({\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H22,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt1\u001b[m\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m1\"\u001b[m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m:\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"T\u001b[m\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTE\u001b[m\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "S", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mES\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mST\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "D", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m D\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mDA\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAT\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mT\"\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;31H\u001b[K\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTA\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mA\"\u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m,\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H23,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt2\u001b[m\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m2\"\u001b[m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m:\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b:\u001b[4m\"\u001b[m\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;22H\u001b[K\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;21H\u001b[K\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "M", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"M\u001b[m\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mMO\u001b[m\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "R", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mOR\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mRE\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m T\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTE\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "S", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mES\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mST\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "D", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m D\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mDA\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAT\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTA\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mA\"\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m,\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H24,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "}", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b }\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b})\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H25,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp.\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.p\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpo\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bos\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bst\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt(\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boo\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt,\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b i\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bit\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bte\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bem\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bms\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs,\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "h", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b h\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bhe\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bea\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bad\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\brs\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs=\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "{", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b={\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H26,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"C\u001b[m\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mCo\u001b[m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mon\u001b[m\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mnt\u001b[m\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4men\u001b[m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mnt\u001b[m\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt-\u001b[m\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-T\u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "y", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTy\u001b[m\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4myp\u001b[m\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mpe\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4me\"\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m:\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"a\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4map\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mpp\u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mpl\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mli\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "c", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mic\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mca\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mat\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mti\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mio\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mon\u001b[m\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "/", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mn/\u001b[m\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m/j\u001b[m\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mjs\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mso\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mon\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mn\"\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H27,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "}", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b }\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b})\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H28,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H29,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp.\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "g", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.g\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bge\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bet\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt(\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boo\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt)\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H30,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b i\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bit\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bte\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bem\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bms\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b j\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bjs\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bso\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn.\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.l\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blo\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boa\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bad\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bds\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs(\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(r\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br.\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.b\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bbo\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bod\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "y", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bdy\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\by)\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H31,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1mas\u001b[0m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\bass\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\u001b[1massert\u001b[0m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\bassertE\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "q", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bEq\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bqu\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bua\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bal\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bls\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs(\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(i\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bit\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bte\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bem\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bms\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "[", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs[\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b[\u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt1\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m1\"\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "]", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m]\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b],\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"T\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTE\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "S", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mES\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mST\u001b[m\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "D", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m D\u001b[m\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mDA\u001b[m\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAT\u001b[m\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTA\u001b[m\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mA\"\u001b[m\u001b[16;47H4\u001b[15;54H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m)\u001b[16;47H5\u001b[15;55H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H32,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1mas\u001b[0m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\bass\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\u001b[1massert\u001b[0m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\bassertE\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "q", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bEq\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bqu\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bua\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bal\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bls\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs(\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(i\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bit\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bte\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bem\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bms\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "[", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs[\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b[\u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt2\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m2\"\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "]", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m]\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b],\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "M", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"M\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mMO\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "R", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mOR\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mRE\u001b[m\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m T\u001b[m\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTE\u001b[m\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "S", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mES\u001b[m\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mST\u001b[m\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H4\u001b[15;54H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "D", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m D\u001b[m\u001b[16;47H5\u001b[15;55H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mDA\u001b[m\u001b[16;47H6\u001b[15;56H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAT\u001b[m\u001b[16;47H7\u001b[15;57H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTA\u001b[m\u001b[16;47H8\u001b[15;58H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mA\"\u001b[m\u001b[16;47H9\u001b[15;59H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m)\u001b[16;46H60\u001b[15;60H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H33,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H34,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;1H\u001b[K\u001b[15;1H\u001b[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;43H34,0-1\u001b[8CBot\u001b[15;1H\u001b[16;33H:\u001b[15;1H\u001b[16;33H\u001b[K\u001b[16;1H:", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "wq\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\"test_syncserver.py\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.031881093978881836
    }, 
    {
      "act": "WRITE", 
      "data": "\r<ncserver.py\" 34L, 788C written\r\u001b[?1l\u001b>\r\r\nrfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\nrfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    },
    {
      "act": "ECHO", 
      "data": "nosetests te", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u0007st_syncserver.py", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.45131993293762207
    }, 
    {
      "act": "WRITE", 
      "data": ".\r\n----------------------------------------------------------------------\r\nRan 1 test in 0.003s\r\n\r\nOK\r\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.01794719696044922
    }, 
    {
      "act": "WRITE", 
      "data": "rfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "vim test_syncserver.py\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.03310799598693848
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?1h\u001b=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.00024008750915527344
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;16r\u001b[m\u001b[m\u001b[0m\u001b[H\u001b[J\u001b[16;1H\"test_syncserver.py\" 34L, 788C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0004901885986328125
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[2;1H\u001b[4mimport\u001b[m unittest\r\n\u001b[4mimport\u001b[m random\r\n\u001b[4mimport\u001b[m json\r\n\r\n\u001b[4mimport\u001b[m syncserver\r\n\r\n\u001b[4mfrom\u001b[m webtest \u001b[4mimport\u001b[m TestApp\r\n\r\n\r\n\u001b[1mclass\u001b[0m \u001b[4mTestSyncServer\u001b[m(unittest.TestCase):\u001b[13;4H \u001b[1mdef\u001b[0m \u001b[4msetUp\u001b[m(self):\u001b[14;8H userid = random.randint(\u001b[4m1\u001b[m, \u001b[4m10000\u001b[m)\u001b[15;8H self.root = \u001b[4m\"/test_user_%d/bookmarks\"\u001b[m % (userid,)\u001b[16;43H1,0-1\u001b[9CTop\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "G", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33HG\u001b[1;1H\u001b[16;33H \u001b[15;1H\u001b[m\u001b[m\u001b[0m\u001b[H\u001b[J\u001b[1;4H \u001b[1mdef\u001b[0m \u001b[4mtest_post_then_get\u001b[m(self):\u001b[2;8H items = json.dumps({\u001b[3;12H \u001b[4m\"test1\"\u001b[m: \u001b[4m\"TEST DATA\"\u001b[m,\u001b[4;12H \u001b[4m\"test2\"\u001b[m: \u001b[4m\"MORE TEST DATA\"\u001b[m,\u001b[5;8H })\u001b[6;8H self.app.post(self.root, items, headers={\u001b[7;12H \u001b[4m\"Content-Type\"\u001b[m: \u001b[4m\"application/json\"\u001b[m\u001b[8;8H })\u001b[10;8H r = self.app.get(self.root)\u001b[11;8H items = json.loads(r.body)\u001b[12;8H self.assertEquals(items[\u001b[4m\"test1\"\u001b[m], \u001b[4m\"TEST DATA\"\u001b[m)\u001b[13;8H self.assertEquals(items[\u001b[4m\"test2\"\u001b[m], \u001b[4m\"MORE TEST DATA\"\u001b[m)\u001b[16;43H34,0-1\u001b[8CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33Hi\u001b[15;1H\u001b[16;33H \u001b[15;1H\r\n\u001b[1m-- INSERT --\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H34,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b d\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\u001b[1mdef\u001b[0m\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4mt\u001b[m\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt_\u001b[m\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "g", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_g\u001b[m\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mge\u001b[m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4met\u001b[m\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt_\u001b[m\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_i\u001b[m\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mit\u001b[m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mem\u001b[m\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mm_\u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_n\u001b[m\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mne\u001b[m\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "w", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mew\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mwe\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mer\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mr_\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_t\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "h", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mth\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mha\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4man\u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mn_\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "x", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_x\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mx\u001b[m(\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf)\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b):\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H35,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br1\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp.\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.p\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpo\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bos\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bst\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt_\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b_j\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bjs\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bso\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn(\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boo\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt,\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H36,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "{", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b {\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b{\u001b[4m\"\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt1\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m1\"\u001b[m\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m:\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"T\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTE\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "S", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mES\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mST\u001b[m\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "D", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m D\u001b[m\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mDA\u001b[m\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAT\u001b[m\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTA\u001b[m\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mA\"\u001b[m\u001b[16;47H4\u001b[15;54H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "}", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m}\u001b[16;47H5\u001b[15;55H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b})\u001b[16;47H6\u001b[15;56H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H37,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br2\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp.\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.p\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpo\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bos\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bst\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt_\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b_j\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bjs\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bso\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn(\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boo\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt,\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H38,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "{", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b {\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b{\u001b[4m\"\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt2\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m2\"\u001b[m\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m:\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "M", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"M\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mMO\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "R", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mOR\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mRE\u001b[m\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m T\u001b[m\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTE\u001b[m\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "S", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mES\u001b[m\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mST\u001b[m\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[4m \u001b[m\u001b[16;47H4\u001b[15;54H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "D", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m D\u001b[m\u001b[16;47H5\u001b[15;55H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mDA\u001b[m\u001b[16;47H6\u001b[15;56H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAT\u001b[m\u001b[16;47H7\u001b[15;57H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTA\u001b[m\u001b[16;47H8\u001b[15;58H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mA\"\u001b[m\u001b[16;47H9\u001b[15;59H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "}", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m}\u001b[16;46H60\u001b[15;60H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[14;59H})\u001b[15;1H\u001b[1m~\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H38,61\u001b[9CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;1H\u001b[K\u001b[16;44H9,1 \u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1mas\u001b[0m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\bass\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bet\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;18H\u001b[K\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\u001b[1massert\u001b[0m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "N", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\bassertN\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bNo\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "E", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\btE\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "q", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bEq\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bqu\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bua\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bal\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bls\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs(\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(r\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br1\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b1.\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "h", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.h\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bhe\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bea\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bad\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\brs\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "[", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs[\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b[\u001b[4m\"\u001b[m\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "X", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"X\u001b[m\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mX-\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "L", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-L\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mLa\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mas\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt-\u001b[m\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "M", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-M\u001b[m\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mMo\u001b[m\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mod\u001b[m\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mdi\u001b[m\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mif\u001b[m\u001b[16;47H4\u001b[15;54H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mfi\u001b[m\u001b[16;47H5\u001b[15;55H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mie\u001b[m\u001b[16;47H6\u001b[15;56H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4med\u001b[m\u001b[16;47H7\u001b[15;57H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4md\"\u001b[m\u001b[16;47H8\u001b[15;58H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "]", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m]\u001b[16;47H9\u001b[15;59H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b],\u001b[16;46H60\u001b[15;60H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H40,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br2\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b2.\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "h", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.h\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bhe\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bea\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bad\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\brs\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "[", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs[\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b[\u001b[4m\"\u001b[m\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "X", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"X\u001b[m\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mX-\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "L", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-L\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mLa\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mas\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt-\u001b[m\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "M", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-M\u001b[m\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mMo\u001b[m\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mod\u001b[m\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mdi\u001b[m\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mif\u001b[m\u001b[16;47H4\u001b[15;54H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mfi\u001b[m\u001b[16;47H5\u001b[15;55H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mie\u001b[m\u001b[16;47H6\u001b[15;56H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4med\u001b[m\u001b[16;47H7\u001b[15;57H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4md\"\u001b[m\u001b[16;47H8\u001b[15;58H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "]", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m]\u001b[16;47H9\u001b[15;59H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b])\u001b[16;46H60\u001b[15;60H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H41,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H42,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b t\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bts\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br1\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b1.\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "h", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.h\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bhe\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bea\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bad\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\brs\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "[", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs[\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b[\u001b[4m\"\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "X", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"X\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mX-\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "L", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-L\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mLa\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mas\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt-\u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "M", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-M\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mMo\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mod\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mdi\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mif\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mfi\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mie\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4med\u001b[m\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4md\"\u001b[m\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "]", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m]\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H43,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp.\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "g", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.g\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bge\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bet\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt(\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boo\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "+", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b +\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "?", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"?\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m?n\u001b[m\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mne\u001b[m\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "w", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mew\u001b[m\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mwe\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mer\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mr=\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m=\"\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "+", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b +\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b t\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bts\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs)\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H44,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1mas\u001b[0m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\bass\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\u001b[1massert\u001b[0m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "R", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\bassertR\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;14H\u001b[1massert\u001b[0m\u001b[15;20H\u001b[K\u001b[16;47H0\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\bassertT\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bTr\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bru\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bue\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\be(\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(\u001b[4m\"\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt1\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m1\"\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b n\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bno\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\u001b[1mnot\u001b[0m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b i\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1min\u001b[0m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br.\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.j\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bjs\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bso\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn)\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H45,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1mas\u001b[0m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\bass\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\u001b[1massert\u001b[0m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\bassertT\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bTr\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bru\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bue\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\be(\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(\u001b[4m\"\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt2\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m2\"\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b i\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1min\u001b[0m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br.\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.j\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bjs\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bso\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn)\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H46,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H47,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b t\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bts\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br2\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b2.\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "h", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.h\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bhe\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bea\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bad\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\brs\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "[", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs[\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b[\u001b[4m\"\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "X", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"X\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mX-\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "L", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-L\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mLa\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mas\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt_\u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "m", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_m\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mmo\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mod\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;35H\u001b[K\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;34H\u001b[K\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;33H\u001b[K\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;32H\u001b[K\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "-", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt-\u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "M", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m-M\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mMo\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mod\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mdi\u001b[m\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mif\u001b[m\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mfi\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mie\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4med\u001b[m\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4md\"\u001b[m\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "]", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m]\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H48,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp.\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "g", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.g\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bge\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bet\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt(\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.r\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\boo\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bot\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "+", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b +\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\u001b[m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "?", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"?\u001b[m\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m?n\u001b[m\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mne\u001b[m\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "w", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mew\u001b[m\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mwe\u001b[m\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mer\u001b[m\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mr=\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m=\"\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "+", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m+\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u007f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[15;47H\u001b[K\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "+", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b +\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H50\u001b[15;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b t\u001b[16;47H1\u001b[15;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bts\u001b[16;47H2\u001b[15;52H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs)\u001b[16;47H3\u001b[15;53H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H49,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1mas\u001b[0m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\bass\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\u001b[1massert\u001b[0m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\bassertT\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bTr\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bru\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bue\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\be(\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(\u001b[4m\"\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt1\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m1\"\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b n\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bno\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\u001b[1mnot\u001b[0m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b i\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1min\u001b[0m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br.\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.j\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bjs\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bso\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn)\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H50,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1mas\u001b[0m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\bass\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ber\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\u001b[1massert\u001b[0m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\b\b\b\bassertT\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bTr\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bru\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bue\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\be(\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(\u001b[4m\"\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"t\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt2\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m2\"\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b n\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bno\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\u001b[1mnot\u001b[0m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b i\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[1min\u001b[0m\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b r\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\br.\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "j", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.j\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bjs\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bso\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn)\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H51,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H52,1\u001b[10CBot\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;1H\u001b[K\u001b[15;1H\u001b[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;43H52,0-1\u001b[8CBot\u001b[15;1H\u001b[16;33H:\u001b[15;1H\u001b[16;33H\u001b[K\u001b[16;1H:", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "wq\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\"test_syncserver.py\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.03734087944030762
    }, 
    {
      "act": "WRITE", 
      "data": "\r<cserver.py\" 52L, 1532C written\r\u001b[?1l\u001b>\r\r\nrfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\nrfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "nosetests test_syncserver.py\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.46503114700317383
    }, 
    {
      "act": "WRITE", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0010311603546142578
    }, 
    {
      "act": "WRITE", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 7.081031799316406e-05
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n----------------------------------------------------------------------\r\nRan 2 tests in 0.004s\r\n\r\nOK\r\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.018628835678100586
    }, 
    {
      "act": "WRITE", 
      "data": "rfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "vim test_syncserver.py\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.03330206871032715
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?1h\u001b=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0002570152282714844
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;16r\u001b[m\u001b[m\u001b[0m\u001b[H\u001b[J\u001b[16;1H\"test_syncserver.py\" 52L, 1532C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.00090789794921875
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[2;1H\u001b[4mimport\u001b[m unittest\r\n\u001b[4mimport\u001b[m random\r\n\u001b[4mimport\u001b[m json\r\n\r\n\u001b[4mimport\u001b[m syncserver\r\n\r\n\u001b[4mfrom\u001b[m webtest \u001b[4mimport\u001b[m TestApp\r\n\r\n\r\n\u001b[1mclass\u001b[0m \u001b[4mTestSyncServer\u001b[m(unittest.TestCase):\u001b[13;4H \u001b[1mdef\u001b[0m \u001b[4msetUp\u001b[m(self):\u001b[14;8H userid = random.randint(\u001b[4m1\u001b[m, \u001b[4m10000\u001b[m)\u001b[15;8H self.root = \u001b[4m\"/test_user_%d/bookmarks\"\u001b[m % (userid,)\u001b[16;43H1,0-1\u001b[9CTop\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H  \u001b[1;1H\u0007\u001b[16;33H^[\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[1;1H\u001b[16;33H^[\u001b[1;1H\u001b[16;35HO\u001b[1;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[1;1H\u001b[16;33H~@k\u001b[1;1H\u001b[16;33H   \u001b[2;1H\u001b[16;43H2,1  \u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[2;1H\u001b[16;33H^[\u001b[2;1H\u001b[16;35HO\u001b[2;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[2;1H\u001b[16;33H~@k\u001b[2;1H\u001b[16;33H   \u001b[3;1H\u001b[16;43H3\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[3;1H\u001b[16;33H^[\u001b[3;1H\u001b[16;35HO\u001b[3;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[3;1H\u001b[16;33H~@k\u001b[3;1H\u001b[16;33H   \u001b[4;1H\u001b[16;43H4\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[4;1H\u001b[16;33H^[\u001b[4;1H\u001b[16;35HO\u001b[4;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[4;1H\u001b[16;33H~@k\u001b[4;1H\u001b[16;33H   \u001b[5;1H\u001b[16;43H5,0-1\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[5;1H\u001b[16;33H^[\u001b[5;1H\u001b[16;35HO\u001b[5;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[5;1H\u001b[16;33H~@k\u001b[5;1H\u001b[16;33H   \u001b[6;1H\u001b[16;43H6,1  \u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[6;1H\u001b[16;33H^[\u001b[6;1H\u001b[16;35HO\u001b[6;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[6;1H\u001b[16;33H~@k\u001b[6;1H\u001b[16;33H   \u001b[7;1H\u001b[16;43H7,0-1\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[7;1H\u001b[16;33H^[\u001b[7;1H\u001b[16;35HO\u001b[7;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[7;1H\u001b[16;33H~@k\u001b[7;1H\u001b[16;33H   \u001b[8;1H\u001b[16;43H8,1  \u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[8;1H\u001b[16;33H^[\u001b[8;1H\u001b[16;35HO\u001b[8;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[8;1H\u001b[16;33H~@k\u001b[8;1H\u001b[16;33H   \u001b[9;1H\u001b[16;43H9,0-1\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[9;1H\u001b[16;33H^[\u001b[9;1H\u001b[16;35HO\u001b[9;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[9;1H\u001b[16;33H~@k\u001b[9;1H\u001b[16;33H   \u001b[10;1H\u001b[16;43H10,0-1\u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[10;1H\u001b[16;33H^[\u001b[10;1H\u001b[16;35HO\u001b[10;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[10;1H\u001b[16;33H~@k\u001b[10;1H\u001b[16;33H   \u001b[11;1H\u001b[16;44H1,1  \u001b[11;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[11;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[11;1H\u001b[16;33H^[\u001b[11;1H\u001b[16;35HO\u001b[11;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[11;1H\u001b[16;33H~@k\u001b[11;1H\u001b[16;33H   \u001b[12;1H\u001b[16;44H2,0-1\u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[12;1H\u001b[16;33H^[\u001b[12;1H\u001b[16;35HO\u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[12;1H\u001b[16;33H~@k\u001b[12;1H\u001b[16;33H   \u001b[13;1H\u001b[16;44H3,1  \u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[13;1H\u001b[16;33H^[\u001b[13;1H\u001b[16;35HO\u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[13;1H\u001b[16;33H~@k\u001b[13;1H\u001b[16;33H   \u001b[14;1H\u001b[16;44H4\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[14;1H\u001b[16;33H^[\u001b[14;1H\u001b[16;35HO\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[14;1H\u001b[16;33H~@k\u001b[14;1H\u001b[16;33H   \u001b[15;1H\u001b[16;44H5\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;1H\u001b[K\u001b[16;43H16,0-1\u001b[9C2%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H self.app = TestApp(syncserver.application)\u001b[16;43H\u001b[K\u001b[16;43H17,1\u001b[11C5%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;8H self.app.delete(self.root)\u001b[16;43H\u001b[K\u001b[16;43H18,1\u001b[11C8%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H19,0-1\u001b[8C10%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H \u001b[1mdef\u001b[0m \u001b[4mtest_post_then_get\u001b[m(self):\u001b[16;43H\u001b[K\u001b[16;43H20,1\u001b[10C13%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[14;1H\u001b[16;43H19,0-1\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[14;1H\u001b[16;33H^[\u001b[14;1H\u001b[16;35HO\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[14;1H\u001b[16;33H~@k\u001b[14;1H\u001b[16;33H   \u001b[13;1H\u001b[16;44H8,1  \u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[13;1H\u001b[16;33H^[\u001b[13;1H\u001b[16;35HO\u001b[13;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[13;1H\u001b[16;33H~@k\u001b[13;1H\u001b[16;33H   \u001b[12;1H\u001b[16;44H7\u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33HO\u001b[12;1H\u001b[16;33H \u001b[12;1H\u001b[16;1H\u001b[1m-- INSERT --\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H17,1\u001b[10C13%\u001b[12;15r\u001b[12;1H\u001bM\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H17,1\u001b[10C13%\u001b[12;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[12;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[12;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[12;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[12;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[12;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[12;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[12;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[12;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b e\u001b[16;46H10\u001b[12;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ben\u001b[16;47H1\u001b[12;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "v", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bnv\u001b[16;47H2\u001b[12;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H3\u001b[12;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b =\u001b[16;47H4\u001b[12;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H5\u001b[12;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "{", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b {\u001b[16;47H6\u001b[12;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b{\u001b[4m\"\r\n        self.app = TestApp(syncserver.application)\r\n        self.app.delete(self.root)\u001b[m\u001b[16;47H7\u001b[12;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"H\u001b[m\u001b[16;47H8\u001b[12;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mHT\u001b[m\u001b[16;47H9\u001b[12;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTT\u001b[m\u001b[16;46H20\u001b[12;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "P", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTP\u001b[m\u001b[16;47H1\u001b[12;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mP_\u001b[m\u001b[16;47H2\u001b[12;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_A\u001b[m\u001b[16;47H3\u001b[12;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "U", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAU\u001b[m\u001b[16;47H4\u001b[12;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mUT\u001b[m\u001b[16;47H5\u001b[12;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTH\u001b[m\u001b[16;47H6\u001b[12;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mHO\u001b[m\u001b[16;47H7\u001b[12;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "R", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mOR\u001b[m\u001b[16;47H8\u001b[12;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "I", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mRI\u001b[m\u001b[16;47H9\u001b[12;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "Z", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mIZ\u001b[m\u001b[16;46H30\u001b[12;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mZA\u001b[m\u001b[16;47H1\u001b[12;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "T", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAT\u001b[m\u001b[16;47H2\u001b[12;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "I", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mTI\u001b[m\u001b[16;47H3\u001b[12;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mIO\u001b[m\u001b[16;47H4\u001b[12;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "N", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mON\u001b[m\u001b[16;47H5\u001b[12;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mN\"\u001b[m\r\n        self.app = TestApp(syncserver.application)\r\n        self.app.delete(self.root)\u001b[16;47H6\u001b[12;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m:\u001b[16;47H7\u001b[12;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[12;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4m\"\r\n        self.app = TestApp(syncserver.application)\r\n        self.app.delete(self.root)\u001b[m\u001b[16;47H9\u001b[12;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "A", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"A\u001b[m\u001b[16;46H40\u001b[12;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mAB\u001b[m\u001b[16;47H1\u001b[12;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mBC\u001b[m\u001b[16;47H2\u001b[12;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mC1\u001b[m\u001b[16;47H3\u001b[12;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m12\u001b[m\u001b[16;47H4\u001b[12;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "3", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m23\u001b[m\u001b[16;47H5\u001b[12;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m3\"\u001b[m\r\n        self.app = TestApp(syncserver.application)\r\n        self.app.delete(self.root)\u001b[16;47H6\u001b[12;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "}", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m}\u001b[16;47H7\u001b[12;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;1H\u001b[K\u001b[12;46H\u001b[16;33H^[\u001b[12;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H  \u001b[12;47H\u001b[16;43H17,46\u001b[9C13%\u001b[12;46H\u001b[16;33H^[\u001b[12;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[12;46H\u001b[16;33H^[\u001b[12;46H\u001b[16;35HO\u001b[12;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[12;46H\u001b[16;33H~@k\u001b[12;46H\u001b[16;33H   \u001b[13;46H\u001b[16;44H8\u001b[13;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[13;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[13;46H\u001b[16;33H^[\u001b[13;46H\u001b[16;35HO\u001b[13;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[13;46H\u001b[16;33H~@k\u001b[13;46H\u001b[16;33H   \u001b[13;47H\u001b[16;47H7\u001b[13;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[13;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[13;47H\u001b[16;33H^[\u001b[13;47H\u001b[16;35HO\u001b[13;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[13;47H\u001b[16;33H~@k\u001b[13;47H\u001b[16;33H   \u001b[13;48H\u001b[16;47H8\u001b[13;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[13;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[13;48H\u001b[16;33H^[\u001b[13;48H\u001b[16;35HO\u001b[13;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "C", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[13;48H\u001b[16;33H~@k\u001b[13;48H\u001b[16;33H   \u001b[13;49H\u001b[16;47H9\u001b[13;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33Ha\u001b[13;49H\u001b[16;33H \u001b[13;50H\r\n\r\n\r\n\u001b[1m-- INSERT --\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H18,50\u001b[9C13%\u001b[13;50H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn,)\u001b[16;47H1\u001b[13;51H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[13;51H\u001b[K\u001b[14;1H)\u001b[14;9H\u001b[K\u001b[15;8H self.app.delete(self.root)\u001b[16;44H9,1 \u001b[10C2\u001b[14;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": ")\u001b[16;46H2\u001b[14;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H3\u001b[14;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H4\u001b[14;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H5\u001b[14;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H6\u001b[14;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H7\u001b[14;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H8\u001b[14;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H9\u001b[14;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H10\u001b[14;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H1\u001b[14;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H2\u001b[14;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H3\u001b[14;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H4\u001b[14;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H5\u001b[14;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H6\u001b[14;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H7\u001b[14;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H8\u001b[14;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H9\u001b[14;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;46H20\u001b[14;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H1\u001b[14;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H2\u001b[14;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H3\u001b[14;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H4\u001b[14;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H5\u001b[14;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H6\u001b[14;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H7\u001b[14;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b  )\u001b[16;47H8\u001b[14;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b e)\u001b[16;47H9\u001b[14;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "x", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bex)\u001b[16;46H30\u001b[14;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bxt)\u001b[16;47H1\u001b[14;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\btr)\u001b[16;47H2\u001b[14;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bra)\u001b[16;47H3\u001b[14;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ba_)\u001b[16;47H4\u001b[14;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b_e)\u001b[16;47H5\u001b[14;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ben)\u001b[16;47H6\u001b[14;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "v", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bnv)\u001b[16;47H7\u001b[14;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bvi)\u001b[16;47H8\u001b[14;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bir)\u001b[16;47H9\u001b[14;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bro)\u001b[16;46H40\u001b[14;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bon)\u001b[16;47H1\u001b[14;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bn=)\u001b[16;47H2\u001b[14;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b=e)\u001b[16;47H3\u001b[14;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\ben)\u001b[16;47H4\u001b[14;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "v", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bnv)\u001b[16;47H5\u001b[14;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;1H\u001b[K\u001b[14;44H\u001b[16;33H^[\u001b[14;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H  \u001b[14;45H\u001b[16;43H19,44\u001b[9C12%\u001b[14;44H\u001b[16;33H^[\u001b[14;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[14;44H\u001b[16;33H^[\u001b[14;44H\u001b[16;35HO\u001b[14;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[14;44H\u001b[16;33H~@k\u001b[14;44H\u001b[16;33H   \u001b[15;34H\u001b[16;43H20,3\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H  \u001b[15;34H\u0007\u001b[16;33H^[\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;34H\u001b[16;33H^[\u001b[15;34H\u001b[16;35HO\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;34H\u001b[16;33H~@k\u001b[15;34H\u001b[16;33H   \u001b[15;1H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H21,0-1\u001b[8C15%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;33H^[\u001b[15;1H\u001b[16;35HO\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H   \u001b[15;1H\u001b[16;33H~@k\u001b[15;1H\u001b[16;33H   \u001b[15;33H\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[15;4H \u001b[1mdef\u001b[0m \u001b[4mtest_post_then_get\u001b[m(self):\u001b[16;43H\u001b[K\u001b[16;43H22,33\u001b[9C17%\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33HO\u001b[15;33H\u001b[16;33H \u001b[15;1H\r\n\u001b[1m-- INSERT --\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H22,1\u001b[10C17%\u001b[15;5H\u001b[K\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "d", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b d\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bde\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\b\u001b[1mdef\u001b[0m\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b \u001b[4mt\u001b[m\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mes\u001b[m\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt_\u001b[m\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_n\u001b[m\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mno\u001b[m\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mon\u001b[m\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mne\u001b[m\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "x", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mex\u001b[m\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mxi\u001b[m\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mis\u001b[m\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4men\u001b[m\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mnt\u001b[m\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "_", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt_\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m_u\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mur\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mrl\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4ml\u001b[m(\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(s\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf)\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b):\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H23,1\u001b[10C19%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H2\u001b[15;2H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H3\u001b[15;3H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H4\u001b[15;4H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H5\u001b[15;5H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H6\u001b[15;6H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H7\u001b[15;7H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H8\u001b[15;8H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;46H9\u001b[15;9H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;46H10\u001b[15;10H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bse\u001b[16;47H1\u001b[15;11H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "l", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bel\u001b[16;47H2\u001b[15;12H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "f", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\blf\u001b[16;47H3\u001b[15;13H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bf.\u001b[16;47H4\u001b[15;14H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.a\u001b[16;47H5\u001b[15;15H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bap\u001b[16;47H6\u001b[15;16H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "p", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bpp\u001b[16;47H7\u001b[15;17H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ".", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bp.\u001b[16;47H8\u001b[15;18H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "g", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b.g\u001b[16;47H9\u001b[15;19H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bge\u001b[16;46H20\u001b[15;20H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bet\u001b[16;47H1\u001b[15;21H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "(", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bt(\u001b[16;47H2\u001b[15;22H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b(\u001b[4m\"\u001b[m\u001b[16;47H3\u001b[15;23H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "/", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"/\u001b[m\u001b[16;47H4\u001b[15;24H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m/n\u001b[m\u001b[16;47H5\u001b[15;25H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mno\u001b[m\u001b[16;47H6\u001b[15;26H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mon\u001b[m\u001b[16;47H7\u001b[15;27H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mne\u001b[m\u001b[16;47H8\u001b[15;28H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "x", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mex\u001b[m\u001b[16;47H9\u001b[15;29H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "i", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mxi\u001b[m\u001b[16;46H30\u001b[15;30H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mis\u001b[m\u001b[16;47H1\u001b[15;31H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mst\u001b[m\u001b[16;47H2\u001b[15;32H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "e", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mte\u001b[m\u001b[16;47H3\u001b[15;33H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4men\u001b[m\u001b[16;47H4\u001b[15;34H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mnt\u001b[m\u001b[16;47H5\u001b[15;35H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\"", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4mt\"\u001b[m\u001b[16;47H6\u001b[15;36H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ",", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m\"\u001b[m,\u001b[16;47H7\u001b[15;37H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": " ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;47H8\u001b[15;38H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b s\u001b[16;47H9\u001b[15;39H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bst\u001b[16;46H40\u001b[15;40H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "a", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bta\u001b[16;47H1\u001b[15;41H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "t", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bat\u001b[16;47H2\u001b[15;42H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "u", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\btu\u001b[16;47H3\u001b[15;43H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "s", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bus\u001b[16;47H4\u001b[15;44H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "=", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\bs=\u001b[16;47H5\u001b[15;45H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "4", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b=\u001b[4m4\u001b[m\u001b[16;47H6\u001b[15;46H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "0", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m40\u001b[m\u001b[16;47H7\u001b[15;47H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "4", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m04\u001b[m\u001b[16;47H8\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ")", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\b\u001b[4m4\u001b[m)\u001b[16;47H9\u001b[15;49H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;1H\u001b[K\u001b[15;48H\u001b[16;33H^[\u001b[15;48H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "o", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;49H\u001b[16;43H23,48\u001b[9C19%\u001b[15;48H\u001b[16;33Ho\u001b[15;48H\u001b[16;33H \u001b[15;1H\r\n\u001b[1m-- INSERT --\u001b[0m\u001b[16;43H\u001b[K\u001b[16;43H24,1\u001b[10C21%\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H24,1\u001b[10C21%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;15r\u001b[15;1H\r\n\u001b[1;16r\u001b[16;43H\u001b[K\u001b[16;43H25,1\u001b[10C23%\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "[16;1H\u001b[K\u001b[15;1H\u001b[16;33H^[\u001b[15;1H", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[16;33H  \u001b[15;1H\u001b[16;43H25,0-1\u001b[8C23%\u001b[15;1H\u001b[16;33H:\u001b[15;1H\u001b[16;33H\u001b[K\u001b[16;1H:", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "ECHO", 
      "data": "q!\r", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?1l\u001b>\u001b[16;1H\u001b[K\u001b[16;1Hrfk@durian:pycon$ ", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "READ", 
      "data": "\u0004", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "WRITE", 
      "data": "exit\r\n", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }, 
    {
      "act": "CLOSE", 
      "term": "a704c99515234a2cb56efd02b92d55e8"
    }
  ]
}
