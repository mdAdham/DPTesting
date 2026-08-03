#t11 customer details
from flask import Flask
app = Flask(__name__)

customers = [
    {"id":0, "name": "Adham", "city":"Pondicherry"},
    {"id":1, "name": "Santhosh", "city":"Chennai"},
    {"id":2, "name": "Rohan", "city":"Madurai"},
]

@app.route("/customers", methods=["GET"])
def getcustomers():
    return customers

@app.route("/customers", methods=["POST"])
def addcustomers():
    data = request.json
    customers.append(data)
    return "Added Successfully"

@app.route("/customers/<int:id>", methods=["PUT"])
def updatecustomers(id):
    data = request.json
    for c in customers:
        if c["id"] == id:
            c["city"] = data["city"]
            return "Updated Successfully"
    return "Update Failed"

if __name__ == "__main__":
    app.run(debug=True)