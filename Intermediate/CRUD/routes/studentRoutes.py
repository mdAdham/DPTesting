from flask import Blueprint
from controller.studentController import *

students = Blueprint("students", __name__) #equivalent to -> # if __name__ == "__main__"

@students.route("/", methods=["GET"])
def getall():
    return getStudents()

@students.route("/add", methods=["POST", "GET"])
def addstud():
    return addStudent()

@students.route("/stu/<int:iD>", methods=["GET"])
def getstud(iD):
    return getStudent(iD)

@students.route("/edit/<int:iD>", methods=["GET"])
def edit(iD):
    return editStudent(iD)

@students.route("/updatestu/<int:iD>", methods=["PUT", "POST"])
def updatestud(iD):
    return updateStudent(iD)

@students.route("/removestu/<int:iD>", methods=["DELETE", "GET"])
def deletestud(iD):
    return deleteStudent(iD)