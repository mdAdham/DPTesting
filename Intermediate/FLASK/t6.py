#t6 - T1 Student Management
from flask import Flask

app = Flask(__name__)

students = [
    {"id":0, "name":"Adham", "department":"CSE"},
    {"id":1, "name":"Santhosh", "department":"CSE"},
    {"id":2, "name":"Rohan", "department":"EEE"},
    {"id":3, "name":"Hariharan", "department":"ECE"}
]

@app.route("/students", methods=["GET"])
def printstudents():
    return students

@app.route("/students", methods=["POST"])
def addstudents():
    data = request.json
    students.append(data)
    return {
            "message": "Student Added Succesfully",
            "Student": data
        }
    
@app.route("/students/<int:id>", methods=["PUT"])
def update(id):
    data = request.json
    for s in students:
        if s[id] == id:
            s["department"] == data["department"]
            return "Updated Successfully"
        
    return "Update Failed"

if __name__ == "__main__":
    app.run(debug=True)