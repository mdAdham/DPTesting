#t8
from flask import Flask

app = Flask(__name__)

employees = [
    {"id":0, "name": "Adham", "salary":500000},
    {"id":1, "name": "Santhosh", "salary":499999},
    {"id":2, "name": "Rohan", "salary":499998}
]

@app.route("/employees", methods=["GET"])
def getemployees():
    return employees

@app.route("/products", methods=["POST"])
def addproducts():
    data = request.json
    employees.append(data)
    return "Added Successfully"

@app.route("/employees/<int:id>", methods=["PUT"])
def updateemployees(id):
    data = request.json
    for p in employees:
        if p[id] == id:
            p["salary"] = data["salary"]
            return "Price Updated Successfully"
    return "Update Failed"

if __name__ == "__main__":
    app.run(debug=True)