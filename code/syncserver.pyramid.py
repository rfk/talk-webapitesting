
import time
import sqlite3

from os import path

from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config
from pyramid.events import subscriber, ApplicationCreated, NewRequest


@subscriber(ApplicationCreated)
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


@subscriber(NewRequest)
def connect_to_database(event):
    request = event.request
    request.db = sqlite3.connect(path.join(path.dirname(__file__), "sync.db"))
    request.add_finished_callback(disconnect_from_database)


def disconnect_from_database(request):
    request.db.close()


@view_config(route_name="collection", request_method="GET")
def get_collection(request):
    query = "SELECT * FROM items WHERE username=:username "\
            "AND collection=:collection and modified > :newer"
    params = request.matchdict.copy()
    params["newer"] = int(request.GET.get("newer", "0"))
    items = [request.db.execute(query, params)]
    return {
      "items": [{"id": r["item"], "payload": r["payload"]} for r in rows]
    }


@view_config(route_name="collection", request_method="POST")
def post_collection(request):
    query = "INSERT INTO items VALUES "\
            "(:username, :collection, :item, :payload, :modified) "
    params = request.matchdict.copy()
    params["modified"] = int(time.time())
    for item in json.loads(request.body):
        params["item"] = item["id"]
        params["payload"] = item["payload"]
        request.db.execute(query, params)


def make_wsgi_app():
    config = Configurator()
    config.add_route("collection", "{userid}/{collection}")
    config.scan("syncserver")
    return config.make_wsgi_app()


if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    app = make_wsgi_app()
    server = make_server('0.0.0.0', 8080, app)
    server.serve_forever()
