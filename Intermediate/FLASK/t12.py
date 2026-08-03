#t12
from flask import Flask
app = Flask(__name__)

patients = [
    {"id":0, "name":"Adham", "disease":"COVID-19"},
    {"id":1, "name":"Santhosh", "disease":"COVID-20"},
    {"id":2, "name":"Rohan", "disease":"COVID-26"}
]

@app.route("/patients", methods=["GET"])
def getpatients():
    return patients

@app.route("/patients", methods=["POST"])
def addpatients():
    data = request.json
    patients.append(data)
    return "Added"

@app.route("/patients/<int:id>", methods=["PUT"])
def updatepatients(id):
    data = request.json
    for p in patients:
        if p["id"] == id:
            p["disease"] = data["disease"]
            return "Success"
    return "Failed"

if __name__ == "__main__":
    app.run(debug=True)