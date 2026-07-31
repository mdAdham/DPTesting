from flask import Flask

app = Flask(__name__)

@app.route("/")
# get or read method
def home():
    return "Hello World, Welcome to the Flask"

@app.route("/about")
def about():
    return "This About Page, And I AM BackupCOOKIE"

@app.route("/html")
def html():
    return "<h1>Hello</h1>"

@app.route("/person/<name>")
def person(name):
    return f"Welcome {name}"

@app.route("/square/<int:num>")
def square(num):
    return f"Square of {num} = {num*num}"

@app.route("/marks/<name>/<int:mark>")
def marks(name, mark):
    if mark >=40:
        return f"{name} Passed"
    else:
        return f"{name} Failed"
    
students = [
    {"id": 1, "name": "Adham"},
    {"id": 2, "name": "Santhosh"},
    {"id": 3, "name": "Anoushka"}
]

@app.route("/students", methods=["GET"])
def printstud():
    return students

@app.route("/addStudent", methods=["POST"])
def addStudent():
    data = request.json
    students.append(data)
    return {
        "message": "Student Added Succesfully",
        "Student": data
    }
    
# put
# edit or update
@app.route("/students/<int:id>", methods=["PUT"])
def updateStudent(id):
    data = request.json
    for stu in students:
        if stu[id] == id:
            stu["name"] = data["name"]
            return {
                    "message": "Update Succesfully",
                    "Student": stu
                }
    
    return {"message": "Unable to update student"}
    

if __name__ == "__main__":
    app.run(debug=True)