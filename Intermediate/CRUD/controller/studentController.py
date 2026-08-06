from flask import request
from dataBase.db import cursor, connection

def getStudents():
    cursor.execute("select * from STUDENTS")
    return cursor.fetchall()

def addStudent():
    data = request.json
    sql = """INSERT INTO STUDENTS(STUDENTNAME, COURSENAME, AGE) VALUES(%s, %s, %s)"""
    cursor.execute(sql, (
        data["STUDENTNAME"],
        data["COURSENAME"],
        data["AGE"]
    ))
    connection.commit()
    return {
        "message": "Student Added Successfully"
    }
    
def getStudent(id):
    sql = """select * from STUDENTS where id=%s"""
    value = id
    cursor.execute(sql, value)
    connection.commit()
    return cursor.fetchone()

# Updating the name, age and the course
# data = {"STUDENTNAME": "name", "COURSENAME": "cse", "AGE": 17}
def updateStudent(id):
    data = request.json
    for s in getStudents():
        if s["ID"] == id:
            sql = """update STUDENTS set STUDENTNAME=%s, COURSENAME=%s, AGE=%s where ID=%s"""
            values = (data["STUDENTNAME"], data["COURSENAME"], data["AGE"],  id)
            cursor.execute(sql, values)
            connection.commit()
            return {
                "message": "Data Updated Successfully",
                "Updated Data": getStudent(id)
            }
    return { "message": "Update Failed" }

def deleteStudent(id):
    sql = """delete from STUDENTS where ID=%s"""
    values = id
    removeddata = getStudent(id)
    cursor.execute(sql, values)
    connection.commit()
    return {
        "message": "Student Deleted Successfully",
        "Student": removeddata
    }