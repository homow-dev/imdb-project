import requests


print(requests.get("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json").json()["banner"])