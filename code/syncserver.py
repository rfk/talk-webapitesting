
import os
import time
import sqlite3

from bottle import Bottle, request, response, run


application = Bottle()


def connect_to_database(event):
    raise ValueError("HERE")
    db = sqlite3.connect(path.join(path.dirname(__file__), "sync.db"))
    db.execute("CREATE TABLE IF NOT EXISTS items ("\
               "   username STRING NOT NULL, "\
               "   collection STRING NOT NULL, "\
               "   item STRING NOT NULL, "\
               "   payload STRING NOT NULL, "\
               "   modified INTEGER NOT NULL, "\
               "PRIMARY KEY (username, collection, item))")


def connect_to_database(event):
    request = event.request
    request.db = sqlite3.connect(path.join(path.dirname(__file__), "sync.db"))
    request.add_finished_callback(disconnect_from_database)


def disconnect_from_database(request):
    request.db.close()


@application.get("/<username>/<collection>")
def get_collection(username, collection):
    query = "SELECT * FROM items WHERE username=:username "\
            "AND collection=:collection and modified > :newer"
    params = {
        "username": username,
        "collection": collection,
        "newer": int(request.query.newer or 0)
    }
    items = [request.db.execute(query, params)]
    return {
      "items": [{"id": r["item"], "payload": r["payload"]} for r in rows]
    }


@application.post("/<username>/<collection>")
def post_collection(request):
    query = "INSERT INTO items VALUES "\
            "(:username, :collection, :item, :payload, :modified) "
    params = request.matchdict.copy()
    params["modified"] = int(time.time())
    for item in json.loads(request.body):
        params["item"] = item["id"]
        params["payload"] = item["payload"]
        request.db.execute(query, params)
    response.set_header("X-Last-Modified", str(params["modified"]))
    return None

if __name__ == "__main__":
    run(host="localhost", port=8080)
