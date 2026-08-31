from flask import request, render_template, redirect, url_for
from dataBase.db import cursor, connection

# normal
# def getStudents():
#     cursor.execute("select * from STUDENTS")
#     return cursor.fetchall()

# for HTML
def getStudents():
    cursor.execute("select * from STUDENTS")
    students_ = cursor.fetchall()
    return render_template(
        "index.html", stu=students_
    )
    
#for postman
# def addStudent():
#     data = request.json
#     sql = """INSERT INTO STUDENTS(STUDENTNAME, COURSENAME, AGE) VALUES(%s, %s, %s)"""
#     cursor.execute(sql, (
#         data["STUDENTNAME"],
#         data["COURSENAME"],
#         data["AGE"]
#     ))
#     connection.commit()
#     return {
#         "message": "Student Added Successfully"
#     }

#for html    
def addStudent():
    if request.method == "GET":
        return render_template("add.html")
    
    studentName = request.form["studentName"]
    studentCourse = request.form["courseName"]
    studentAge = request.form["studentAge"]
    sql = """INSERT INTO STUDENTS(STUDENTNAME, COURSENAME, AGE) VALUES(%s, %s, %s)"""
    cursor.execute(sql, (
        studentName,
        studentCourse,
        studentAge
    ))
    connection.commit()
    
    cursor.execute("select * from STUDENTS")
    students_ = cursor.fetchall()
        
    # return redirect("/")
    return redirect(url_for("students.getall"))


def getStudent(id):
    sql = """select * from STUDENTS where id=%s"""
    value = id
    cursor.execute(sql, value)
    connection.commit()
    return cursor.fetchone()

# Updating the name, age and the course
# data = {"STUDENTNAME": "name", "COURSENAME": "cse", "AGE": 17}
#for postman
# def updateStudent(id):
#     data = request.json
#     sql = """update STUDENTS set STUDENTNAME=%s, COURSENAME=%s, AGE=%s where ID=%s"""
#     values = (data["STUDENTNAME"], data["COURSENAME"], data["AGE"],  id)
#     cursor.execute(sql, values)
#     connection.commit()
#     return {
#         "message": "Data Updated Successfully",
#         "Updated Data": getStudent(id)
#     }

def editStudent(id):
    sql="""select * from STUDENTS where id=%s"""
    value = id
    cursor.execute(sql, value)
    student = cursor.fetchone()
    return render_template("edit.html", student=student)
    

def updateStudent(id):
    if request.method == "POST":
        studentName = request.form["studentName"]
        studentCourse = request.form["studentCourse"]
        studentAge = request.form["studentAge"]

    elif request.method == "PUT":
        data = request.get_json()

        studentName = data["studentName"]
        studentCourse = data["studentCourse"]
        studentAge = data["studentAge"]
        
    sql = """update STUDENTS set STUDENTNAME=%s, COURSENAME=%s, AGE=%s where ID=%s"""
    values = (studentName, studentCourse, studentAge, id)
    cursor.execute(sql, values)
    connection.commit()
    return redirect("/")


def deleteStudent(id):
    sql = """delete from STUDENTS where ID=%s"""
    values = id
    removeddata = getStudent(id)
    cursor.execute(sql, values)
    connection.commit()
    
    if request.method == "GET":
        return redirect("/")

    return {
        "message": "Student Deleted Successfully",
        "Student": removeddata
    }