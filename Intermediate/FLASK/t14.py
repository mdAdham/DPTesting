#t14 mobile store
from flask import Flask
app = Flask(__name__)

mobiles = [
    {"id":0, "brand":"Samsung", "price":"60000"},
    {"id":1, "brand":"IPhone", "price":"110000"},
    {"id":2, "brand":"Nokia", "price":"9000"}
]

@app.route("/mobiles", methods=["GET"])
def getmobiles():
    return mobiles

@app.route("/mobiles", methods=["POST"])
def addmobiles():
    data = request.json
    mobiles.append(data)
    return "Added"

@app.route("/mobiles/<int:id>", methods=["PUT"])
def updatemobiles(id):
    data = request.json
    for p in mobiles:
        if p["id"] == id:
            p["price"] = data["price"]
            return "Success"
    return "Failed"

if __name__ == "__main__":
    app.run(debug=True)