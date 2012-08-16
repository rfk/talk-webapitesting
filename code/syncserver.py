
import os
import time
import json
import sqlite3

from bottle import Bottle, request, response, run


application = Bottle(catchall=False)


db = sqlite3.connect("/tmp/sync.db")

db.execute("CREATE TABLE IF NOT EXISTS items ("\
           "   username STRING NOT NULL, "\
           "   collection STRING NOT NULL, "\
           "   item STRING NOT NULL, "\
           "   payload STRING NOT NULL, "\
           "   modified INTEGER NOT NULL, "\
           "PRIMARY KEY (username, collection, item))")


@application.post("/<username>/<collection>")
def post_collection(username, collection):

    query = "INSERT OR REPLACE INTO items VALUES "\
            "(:username, :collection, :item, :payload, :modified) "

    modified = int(time.time() * 1000000)
    payloads = json.loads(request.body.read())
    for item in payloads:
        db.execute(query, {
            "username": username,
            "collection": collection,
            "item": item,
            "payload": payloads[item],
            "modified": modified
        })

    response.set_header("X-Last-Modified", str(modified))
    return None


@application.get("/<username>/<collection>")
def get_collection(username, collection):

    query = "SELECT item, payload FROM items WHERE username=:username "\
            "AND collection=:collection and modified > :newer"

    rows = db.execute(query, {
        "username": username,
        "collection": collection,
        "newer": int(request.query.newer or 0)
    })

    items = {}
    for row in rows:
        items[row[0]] = row[1]

    query = "SELECT MAX(modified) FROM items "\
            "WHERE username=:username AND collection=:collection"
    r = db.execute(query, {"username": username, "collection": collection})
    last_modified = r.fetchone()
    if last_modified is None:
        last_modified = 0

    response.set_header("X-Last-Modified", str(last_modified))
    return items


@application.delete("/<username>/<collection>")
def delete_collection(username, collection):
    query = "DELETE FROM items WHERE "\
            "username=:username AND collection=:collection"
    db.execute(query, {
        "username": username,
        "collection": collection,
    })
    return None


if __name__ == "__main__":
    run(application, host="localhost", port=8080)
