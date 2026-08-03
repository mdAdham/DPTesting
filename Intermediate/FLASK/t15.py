#t14 restaurant menu
from flask import Flask
app = Flask(__name__)

foods = [
    {"id":0, "food_name":"Pizza", "price":"280"},
    {"id":1, "food_name":"Dosa", "price":"15"},
    {"id":2, "food_name":"Idli", "price":"10"}
]

@app.route("/foods", methods=["GET"])
def getmobiles():
    return foods

@app.route("/foods", methods=["POST"])
def addmobiles():
    data = request.json
    foods.append(data)
    return "Added"

@app.route("/foods/<int:id>", methods=["PUT"])
def updatemobiles(id):
    data = request.json
    for p in foods:
        if p["id"] == id:
            p["price"] = data["price"]
            return "Success"
    return "Failed"

if __name__ == "__main__":
    app.run(debug=True)