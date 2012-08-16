
import json
import random

from funkload.FunkLoadTestCase import FunkLoadTestCase
from funkload.utils import Data


class LoadTest(FunkLoadTestCase):

    def test_post_then_get(self):
        userid = random.randint(1, 10000)
        root = "/test_user_%d/bookmarks" % (userid,)
        url = self.conf_get("main", "url") + root

        items = json.dumps({
            "test1": "TEST DATA",
            "test2": "MORE TEST DATA",
        })
        params = Data("application/json", items)

        self.setOkCodes([200])
        self.post(url, params=params)

        r = self.get(url)
        items = json.loads(r.body)
        self.assertEquals(items["test1"], "TEST DATA")
        self.assertEquals(items["test2"], "MORE TEST DATA")


