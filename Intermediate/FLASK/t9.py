#t9
from flask import Flask
app = Flask(__name__)
books = [
    {"id":0, "title":"12thCS", "author":"Sivanganam"},
    {"id":1, "title":"Rich Dad Poor Dad", "author":"I dont know"},
    {"id":2, "title":"Advance Py", "author":"Anadhakumar"}
]

@app.route("/books", methods=["GET"])
def getbooks():
    return books
@app.route("/books", methods=["POST"])
def postbooks():
    data = request.json
    books.append(books)
    return "Book Added Successfully"

@app.route("/books/<int:id>", methods=["PUT"])
def updatebooks(id):
    data = request.json
    for b in books:
        if b["id"] == id:
            b["author"] = data["author"]
            return "Updated Successfully"
    return "Update Failed"

if __name__ == "__main__":
    app.run(debug=True)