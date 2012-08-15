var pias_data = {
  "events": [
    {
      "act": "OPEN", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.585209846496582
    }, 
    {
      "act": "WRITE", 
      "data": "rfk@durian:playitagainsam$ ", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "vim set", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "\t", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "up.py ", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\n", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.03200101852416992
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?1049h\u001b[?1h\u001b=", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0002129077911376953
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;24r\u001b[?12;25h\u001b[?12l\u001b[?25h\u001b[27m\u001b[m\u001b[H\u001b[2J\u001b[?25l\u001b[24;1H\"setup.py\" 83L, 2406C", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0009758472442626953
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[>c", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0014328956604003906
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1;1H\u001b[34m#\r\n#  This is the setuptools script for \"playitagainsam\".\r\n#  Originally developed by Ryan Kelly, 2012.\r\n#\r\n#  This script is placed in the public domain.\r\n#\u001b[m\r\n\r\n\u001b[35mimport\u001b[m os\r\n\u001b[35mimport\u001b[m sys\r\nsetup_kwds = {}\r\n\r\n\u001b[34m#  Use setuptools is available, so we have `python setup.py test`.\r\n#  We also need it for 2to3 integration on python3.\r\n#  Otherwise, fall back to plain old distutils.\u001b[m\r\n\u001b[33mtry\u001b[m:\r\n    \u001b[35mfrom\u001b[m setuptools \u001b[35mimport\u001b[m setup\r\n\u001b[33mexcept\u001b[m \u001b[32mImportError\u001b[m:\r\n    \u001b[33mif\u001b[m sys.version_info > (\u001b[31m3\u001b[m,):\u001b[19;8H \u001b[33mraise\u001b[m \u001b[32mRuntimeError\u001b[m(\u001b[31m\"python3 support requires setuptools\"\u001b[m)\r\n    \u001b[35mfrom\u001b[m distutils.core \u001b[35mimport\u001b[m setup\r\n\u001b[33melse\u001b[m:\r\n    setup_kwds[\u001b[31m\"test_suite\"\u001b[m] = \u001b[31m\"playitagainsam.test\"\u001b[m\r\n    \u001b[33mif\u001b[m sys.version_info > (\u001b[31m3\u001b[m,):\u001b[24;63H1,1\u001b[11CTop\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "[", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": ">", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[24;56H>\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H    \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[24;56H>\u001b[1;1H\u001b[24;57H1\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": ";", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H     \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[24;56H>\u001b[1;1H\u001b[24;57H1\u001b[1;1H\u001b[24;58H;\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "3", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H      \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[24;56H>\u001b[1;1H\u001b[24;57H1\u001b[1;1H\u001b[24;58H;\u001b[1;1H\u001b[24;59H3\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "2", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H       \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[24;56H>\u001b[1;1H\u001b[24;57H1\u001b[1;1H\u001b[24;58H;\u001b[1;1H\u001b[24;59H3\u001b[1;1H\u001b[24;60H2\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "0", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H        \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[24;56H>\u001b[1;1H\u001b[24;57H1\u001b[1;1H\u001b[24;58H;\u001b[1;1H\u001b[24;59H3\u001b[1;1H\u001b[24;60H2\u001b[1;1H\u001b[24;61H0\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "1", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H         \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[24;56H>\u001b[1;1H\u001b[24;57H1\u001b[1;1H\u001b[24;58H;\u001b[1;1H\u001b[24;59H3\u001b[1;1H\u001b[24;60H2\u001b[1;1H\u001b[24;61H0\u001b[1;1H\u001b[24;62H1\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": ";", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H          \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55H[\u001b[1;1H\u001b[24;56H>\u001b[1;1H\u001b[24;57H1\u001b[1;1H\u001b[24;58H;\u001b[1;1H\u001b[24;59H3\u001b[1;1H\u001b[24;60H2\u001b[1;1H\u001b[24;61H0\u001b[1;1H\u001b[24;62H1\u001b[1;1H\u001b[24;53H[[>1;3201;\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "0", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H          \u001b[1;1H\u001b[24;53H[\u001b[1;1H\u001b[24;54H>\u001b[1;1H\u001b[24;55H1\u001b[1;1H\u001b[24;56H;\u001b[1;1H\u001b[24;57H3\u001b[1;1H\u001b[24;58H2\u001b[1;1H\u001b[24;59H0\u001b[1;1H\u001b[24;60H1\u001b[1;1H\u001b[24;61H;\u001b[1;1H\u001b[24;62H0\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "c", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H          \u001b[1;1H\u001bP+q436f\u001b\\\u001bP+q6b75\u001b\\\u001bP+q6b64\u001b\\\u001bP+q6b72\u001b\\\u001bP+q6b6c\u001b\\\u001bP+q2332\u001b\\\u001bP+q2334\u001b\\\u001bP+q2569\u001b\\\u001bP+q2a37\u001b\\\u001bP+q6b31\u001b\\\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[1;1H\u001b[24;53H^[\u001b[1;1H\u001b[24;55HO\u001b[1;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[1;1H\u001b[24;53H~@k\u001b[1;1H\u001b[24;53H   \u001b[2;1H\u001b[24;63H2\u001b[2;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[2;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[2;1H\u001b[24;53H^[\u001b[2;1H\u001b[24;55HO\u001b[2;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[2;1H\u001b[24;53H~@k\u001b[2;1H\u001b[24;53H   \u001b[3;1H\u001b[24;63H3\u001b[3;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[3;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[3;1H\u001b[24;53H^[\u001b[3;1H\u001b[24;55HO\u001b[3;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[3;1H\u001b[24;53H~@k\u001b[3;1H\u001b[24;53H   \u001b[4;1H\u001b[24;63H4\u001b[4;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[4;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[4;1H\u001b[24;53H^[\u001b[4;1H\u001b[24;55HO\u001b[4;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[4;1H\u001b[24;53H~@k\u001b[4;1H\u001b[24;53H   \u001b[5;1H\u001b[24;63H5\u001b[5;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[5;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[5;1H\u001b[24;53H^[\u001b[5;1H\u001b[24;55HO\u001b[5;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[5;1H\u001b[24;53H~@k\u001b[5;1H\u001b[24;53H   \u001b[6;1H\u001b[24;63H6\u001b[6;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[6;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[6;1H\u001b[24;53H^[\u001b[6;1H\u001b[24;55HO\u001b[6;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[6;1H\u001b[24;53H~@k\u001b[6;1H\u001b[24;53H   \u001b[7;1H\u001b[24;63H7,0-1\u001b[7;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[7;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[7;1H\u001b[24;53H^[\u001b[7;1H\u001b[24;55HO\u001b[7;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[7;1H\u001b[24;53H~@k\u001b[7;1H\u001b[24;53H   \u001b[8;1H\u001b[24;63H8,1  \u001b[8;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[8;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[8;1H\u001b[24;53H^[\u001b[8;1H\u001b[24;55HO\u001b[8;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[8;1H\u001b[24;53H~@k\u001b[8;1H\u001b[24;53H   \u001b[9;1H\u001b[24;63H9\u001b[9;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[9;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[9;1H\u001b[24;53H^[\u001b[9;1H\u001b[24;55HO\u001b[9;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[9;1H\u001b[24;53H~@k\u001b[9;1H\u001b[24;53H   \u001b[10;1H\u001b[24;63H10,1\u001b[10;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[10;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[10;1H\u001b[24;53H^[\u001b[10;1H\u001b[24;55HO\u001b[10;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[10;1H\u001b[24;53H~@k\u001b[10;1H\u001b[24;53H   \u001b[11;1H\u001b[24;64H1,0-1\u001b[11;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[11;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[11;1H\u001b[24;53H^[\u001b[11;1H\u001b[24;55HO\u001b[11;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[11;1H\u001b[24;53H~@k\u001b[11;1H\u001b[24;53H   \u001b[12;1H\u001b[24;64H2,1  \u001b[12;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[12;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[12;1H\u001b[24;53H^[\u001b[12;1H\u001b[24;55HO\u001b[12;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[12;1H\u001b[24;53H~@k\u001b[12;1H\u001b[24;53H   \u001b[13;1H\u001b[24;64H3\u001b[13;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[13;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[13;1H\u001b[24;53H^[\u001b[13;1H\u001b[24;55HO\u001b[13;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[13;1H\u001b[24;53H~@k\u001b[13;1H\u001b[24;53H   \u001b[14;1H\u001b[24;64H4\u001b[14;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[14;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[14;1H\u001b[24;53H^[\u001b[14;1H\u001b[24;55HO\u001b[14;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[14;1H\u001b[24;53H~@k\u001b[14;1H\u001b[24;53H   \u001b[15;1H\u001b[24;64H5\u001b[15;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[15;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[15;1H\u001b[24;53H^[\u001b[15;1H\u001b[24;55HO\u001b[15;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[15;1H\u001b[24;53H~@k\u001b[15;1H\u001b[24;53H   \u001b[16;1H\u001b[24;64H6\u001b[16;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[16;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[16;1H\u001b[24;53H^[\u001b[16;1H\u001b[24;55HO\u001b[16;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[16;1H\u001b[24;53H~@k\u001b[16;1H\u001b[24;53H   \u001b[17;1H\u001b[24;64H7\u001b[17;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[17;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[17;1H\u001b[24;53H^[\u001b[17;1H\u001b[24;55HO\u001b[17;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[17;1H\u001b[24;53H~@k\u001b[17;1H\u001b[24;53H   \u001b[18;1H\u001b[24;64H8\u001b[18;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[18;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[18;1H\u001b[24;53H^[\u001b[18;1H\u001b[24;55HO\u001b[18;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[18;1H\u001b[24;53H~@k\u001b[18;1H\u001b[24;53H   \u001b[19;1H\u001b[24;64H9\u001b[19;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[19;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[19;1H\u001b[24;53H^[\u001b[19;1H\u001b[24;55HO\u001b[19;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[19;1H\u001b[24;53H~@k\u001b[19;1H\u001b[24;53H   \u001b[20;1H\u001b[24;63H20\u001b[20;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[20;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[20;1H\u001b[24;53H^[\u001b[20;1H\u001b[24;55HO\u001b[20;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[20;1H\u001b[24;53H~@k\u001b[20;1H\u001b[24;53H   \u001b[21;1H\u001b[24;64H1\u001b[21;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[21;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[21;1H\u001b[24;53H^[\u001b[21;1H\u001b[24;55HO\u001b[21;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[21;1H\u001b[24;53H~@k\u001b[21;1H\u001b[24;53H   \u001b[22;1H\u001b[24;64H2\u001b[22;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[22;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[22;1H\u001b[24;53H^[\u001b[22;1H\u001b[24;55HO\u001b[22;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[22;1H\u001b[24;53H~@k\u001b[22;1H\u001b[24;53H   \u001b[23;1H\u001b[24;64H3\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[23;8H setup_kwds[\u001b[31m\"use_2to3\"\u001b[m] = \u001b[36mTrue\u001b[m\u001b[24;1H\u001b[K\u001b[24;63H24,1\u001b[11C1%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[24;63H\u001b[K\u001b[24;63H25,0-1\u001b[9C3%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[23;1HHERE = os.path.abspath(os.path.dirname(__file__))\u001b[24;63H\u001b[K\u001b[24;63H26,1\u001b[11C5%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[24;63H\u001b[K\u001b[24;63H27,0-1\u001b[9C6%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[23;1H\u001b[34m#  Extract the docstring and version declaration from the module.\u001b[m\u001b[24;63H\u001b[K\u001b[24;63H28,1\u001b[11C8%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[23;1H\u001b[34m#  To avoid errors due to missing dependencies or bad python versions,\u001b[m\u001b[24;63H\u001b[K\u001b[24;63H29,1\u001b[10C10%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[23;1H\u001b[34m#  we explicitly read the file contents up to the end of the version\u001b[m\u001b[24;63H\u001b[K\u001b[24;63H30,1\u001b[10C11%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[23;1H\u001b[34m#  delcaration, then exec it ourselves.\u001b[m\u001b[24;63H\u001b[K\u001b[24;63H31,1\u001b[10C13%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "O", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;1H\u001b[24;53H^[\u001b[23;1H\u001b[24;55HO\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "B", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H   \u001b[23;1H\u001b[24;53H~@k\u001b[23;1H\u001b[24;53H   \u001b[23;1H\u001b[1;23r\u001b[23;1H\r\n\u001b[1;24r\u001b[23;1Hsrc = \u001b[36mopen\u001b[m(os.path.join(HERE, \u001b[31m\"playitagainsam\"\u001b[m, \u001b[31m\"__init__.py\"\u001b[m))\u001b[24;63H\u001b[K\u001b[24;63H32,1\u001b[10C15%\u001b[23;1H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "G", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53HG\u001b[23;1H\u001b[24;53H \u001b[23;6H\u001b[27m\u001b[m\u001b[H\u001b[2J\u001b[1;4H \u001b[31m\"Programming Language :: Python :: 3.2\"\u001b[m,\r\n    \u001b[31m\"License :: OSI Approved\"\u001b[m,\r\n    \u001b[31m\"License :: OSI Approved :: MIT License\"\u001b[m,\r\n    \u001b[31m\"Development Status :: 4 - Beta\"\u001b[m,\r\n    \u001b[31m\"Intended Audience :: Developers\"\u001b[m,\r\n]\r\n\r\n\r\nsetup\u001b[46m(\u001b[mname=NAME,\u001b[10;6H version=VERSION,\u001b[11;6H author=AUTHOR,\u001b[12;6H author_email=AUTHOR_EMAIL,\u001b[13;6H url=URL,\u001b[14;6H description=DESCRIPTION,\u001b[15;6H long_description=LONG_DESC,\u001b[16;6H license=LICENSE,\u001b[17;6H keywords=KEYWORDS,\u001b[18;6H packages=[\u001b[31m\"playitagainsam\"\u001b[m],\u001b[19;6H scripts=[\u001b[31m\"scripts/pias\"\u001b[m],\u001b[20;6H install_requires=[\u001b[31m\"psutil\"\u001b[m],\u001b[21;6H classifiers=CLASSIFIERS,\u001b[22;6H **setup_kwds\r\n     \u001b[46m)\u001b[m\u001b[24;63H83,6\u001b[10CBot\u001b[23;6H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\u001b", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "[?25l\u001b[24;53H^[\u001b[23;6H\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": ":", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;53H  \u001b[23;6H\u0007\u001b[?12l\u001b[?25h\u001b[?25l\u001b[24;53H:\u001b[23;6H\u001b[24;53H\u001b[K\u001b[24;1H:\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "q", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "!", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[?12l\u001b[?25h", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "ECHO", 
      "data": "\r", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?25l\u001b[24;1H\u001b[K\u001b[24;1H\u001b[?1l\u001b>\u001b[?12l\u001b[?25h\u001b[?1049lrfk@durian:playitagainsam$ ", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "READ", 
      "data": "\u0004", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "WRITE", 
      "data": "exit\r\n", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }, 
    {
      "act": "CLOSE", 
      "term": "7235aba814b54147806ff4ab2615bf98"
    }
  ]
}
