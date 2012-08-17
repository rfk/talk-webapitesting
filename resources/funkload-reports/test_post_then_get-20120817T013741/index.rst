======================
FunkLoad_ bench report
======================


:date: 2012-08-17 01:37:41
:abstract: Demo FunkLoad Test
           Bench result of ``LoadTest.test_post_then_get``: 
           No test description

.. _FunkLoad: http://funkload.nuxeo.org/
.. sectnum::    :depth: 2
.. contents:: Table of contents
.. |APDEXT| replace:: \ :sub:`1.5`

Bench configuration
-------------------

* Launched: 2012-08-17 01:37:41
* From: durian
* Test: ``load_standalone.py LoadTest.test_post_then_get``
* Target server: http://192.168.0.2:8080
* Cycles of concurrent users: [10, 15, 20, 30]
* Cycle duration: 5s
* Sleeptime between request: from 0.0s to 0.1s
* Sleeptime between test case: 0.01s
* Startup delay between thread: 0.01s
* Apdex: |APDEXT|
* FunkLoad_ version: 1.16.1


Bench content
-------------

The test ``LoadTest.test_post_then_get`` contains: 

* 2 page(s)
* 0 redirect(s)
* 0 link(s)
* 0 image(s)
* 0 XML RPC call(s)

The bench contains:

* 2103 tests
* 4204 pages
* 4204 requests


Test stats
----------

The number of Successful **Tests** Per Second (STPS) over Concurrent Users (CUs).

 .. image:: tests.png

 ================== ================== ================== ================== ==================
                CUs               STPS              TOTAL            SUCCESS              ERROR
 ================== ================== ================== ================== ==================
                 10             82.600                413                413             0.00%
                 15            124.200                621                621             0.00%
                 20            112.200                561                561             0.00%
                 30            101.600                508                508             0.00%
 ================== ================== ================== ================== ==================



Page stats
----------

The number of Successful **Pages** Per Second (SPPS) over Concurrent Users (CUs).
Note that an XML RPC call count like a page.

 .. image:: pages_spps.png
 .. image:: pages.png

 ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================
                CUs             Apdex*             Rating               SPPS            maxSPPS              TOTAL            SUCCESS              ERROR                MIN                AVG                MAX                P10                MED                P90                P95
 ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================
                 10              1.000          Excellent            166.200            169.000                831                831             0.00%              0.001              0.003              0.034              0.001              0.002              0.006              0.008
                 15              1.000          Excellent            249.600            264.000               1248               1248             0.00%              0.001              0.003              0.032              0.001              0.002              0.005              0.006
                 20              1.000          Excellent            223.000            319.000               1115               1115             0.00%              0.001              0.021              1.009              0.001              0.002              0.006              0.013
                 30              0.999          Excellent            202.000            323.000               1010               1010             0.00%              0.001              0.058              1.638              0.002              0.005              0.031              0.447
 ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================

 \* Apdex |APDEXT|

Request stats
-------------

The number of **Requests** Per Second (RPS) successful or not over Concurrent Users (CUs).

 .. image:: requests_rps.png
 .. image:: requests.png

 ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================
                CUs             Apdex*            Rating*                RPS             maxRPS              TOTAL            SUCCESS              ERROR                MIN                AVG                MAX                P10                MED                P90                P95
 ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================
                 10              1.000          Excellent            166.200            169.000                831                831             0.00%              0.001              0.003              0.034              0.001              0.002              0.006              0.008
                 15              1.000          Excellent            249.600            264.000               1248               1248             0.00%              0.001              0.003              0.032              0.001              0.002              0.005              0.006
                 20              1.000          Excellent            223.000            319.000               1115               1115             0.00%              0.001              0.021              1.009              0.001              0.002              0.006              0.013
                 30              0.999          Excellent            202.000            323.000               1010               1010             0.00%              0.001              0.058              1.638              0.002              0.005              0.031              0.447
 ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================

 \* Apdex |APDEXT|

Slowest requests
----------------

The 5 slowest average response time during the best cycle with **15** CUs:

* In page 001, Apdex rating: Excellent, avg response time: 0.00s, post: ``/test_user_1191/bookmarks``
  ``
* In page 002, Apdex rating: Excellent, avg response time: 0.00s, get: ``/test_user_4574/bookmarks``
  ``

Page detail stats
-----------------


PAGE 001: /test_user_2030/bookmarks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Req: 001, post, url ``/test_user_2030/bookmarks``

     .. image:: request_001.001.png

     ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================
                    CUs             Apdex*             Rating              TOTAL            SUCCESS              ERROR                MIN                AVG                MAX                P10                MED                P90                P95
     ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================
                     10              1.000          Excellent                414                414             0.00%              0.001              0.003              0.034              0.001              0.002              0.006              0.009
                     15              1.000          Excellent                622                622             0.00%              0.001              0.003              0.032              0.001              0.002              0.005              0.006
                     20              1.000          Excellent                558                558             0.00%              0.001              0.020              1.008              0.001              0.002              0.006              0.011
                     30              0.999          Excellent                504                504             0.00%              0.001              0.064              1.638              0.002              0.005              0.031              0.494
     ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================

     \* Apdex |APDEXT|

PAGE 002: /test_user_7702/bookmarks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Req: 001, get, url ``/test_user_7702/bookmarks``

     .. image:: request_002.001.png

     ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================
                    CUs             Apdex*             Rating              TOTAL            SUCCESS              ERROR                MIN                AVG                MAX                P10                MED                P90                P95
     ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================
                     10              1.000          Excellent                417                417             0.00%              0.001              0.003              0.018              0.001              0.002              0.006              0.008
                     15              1.000          Excellent                626                626             0.00%              0.001              0.003              0.024              0.001              0.002              0.004              0.006
                     20              1.000          Excellent                557                557             0.00%              0.001              0.022              1.009              0.001              0.002              0.006              0.013
                     30              0.999          Excellent                506                506             0.00%              0.001              0.053              1.637              0.001              0.004              0.032              0.445
     ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ================== ==================

     \* Apdex |APDEXT|

Definitions
-----------

* CUs: Concurrent users or number of concurrent threads executing tests.
* Request: a single GET/POST/redirect/xmlrpc request.
* Page: a request with redirects and resource links (image, css, js) for an html page.
* STPS: Successful tests per second.
* SPPS: Successful pages per second.
* RPS: Requests per second, successful or not.
* maxSPPS: Maximum SPPS during the cycle.
* maxRPS: Maximum RPS during the cycle.
* MIN: Minimum response time for a page or request.
* AVG: Average response time for a page or request.
* MAX: Maximmum response time for a page or request.
* P10: 10th percentile, response time where 10 percent of pages or requests are delivered.
* MED: Median or 50th percentile, response time where half of pages or requests are delivered.
* P90: 90th percentile, response time where 90 percent of pages or requests are delivered.
* P95: 95th percentile, response time where 95 percent of pages or requests are delivered.
* Apdex T: Application Performance Index, 
  this is a numerical measure of user satisfaction, it is based
  on three zones of application responsiveness:

  - Satisfied: The user is fully productive. This represents the
    time value (T seconds) below which users are not impeded by
    application response time.

  - Tolerating: The user notices performance lagging within
    responses greater than T, but continues the process.

  - Frustrated: Performance with a response time greater than 4*T
    seconds is unacceptable, and users may abandon the process.

    By default T is set to 1.5s this means that response time between 0
    and 1.5s the user is fully productive, between 1.5 and 6s the
    responsivness is tolerating and above 6s the user is frustrated.

    The Apdex score converts many measurements into one number on a
    uniform scale of 0-to-1 (0 = no users satisfied, 1 = all users
    satisfied).

    Visit http://www.apdex.org/ for more information.
* Rating: To ease interpretation the Apdex
  score is also represented as a rating:

  - U for UNACCEPTABLE represented in gray for a score between 0 and 0.5 

  - P for POOR represented in red for a score between 0.5 and 0.7

  - F for FAIR represented in yellow for a score between 0.7 and 0.85

  - G for Good represented in green for a score between 0.85 and 0.94

  - E for Excellent represented in blue for a score between 0.94 and 1.

Report generated with FunkLoad_ 1.16.1, more information available on the `FunkLoad site <http://funkload.nuxeo.org/#benching>`_.