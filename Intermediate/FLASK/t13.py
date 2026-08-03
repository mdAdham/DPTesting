#t13 college management
from flask import Flask
app = Flask(__name__)

marks = [
    {"id":0, "name":"Adham", "mark":"98"},
    {"id":1, "name":"Santhosh", "mark":"100"},
    {"id":2, "name":"Rohan", "mark":"99"}
]

@app.route("/marks", methods=["GET"])
def getmarks():
    return marks

@app.route("/marks", methods=["POST"])
def addmarks():
    data = request.json
    marks.append(data)
    return "Added"

@app.route("/marks/<int:id>", methods=["PUT"])
def updatemarks(id):
    data = request.json
    for p in marks:
        if p["id"] == id:
            p["mark"] = data["mark"]
            return "Success"
    return "Failed"

if __name__ == "__main__":
    app.run(debug=True)