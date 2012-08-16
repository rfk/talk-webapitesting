
import json
import random

from funkload.FunkLoadTestCase import FunkLoadTestCase
from funkload.utils import Data


class LoadTest(FunkLoadTestCase):

    def test_post_then_get(self):
        root = "/test_user_%d/bookmarks" % (random.randint(1, 10000))
        url = self.conf_get("main", "url") + root

        items = {
            "test1": "TEST DATA",
            "test2": "MORE TEST DATA",
        }
        self.post(url, params=Data("application/json", json.dumps(items)))

        r = self.get(url)
        items = json.loads(r.body)
        self.assertEquals(items["test1"], "TEST DATA")
        self.assertEquals(items["test2"], "MORE TEST DATA")


