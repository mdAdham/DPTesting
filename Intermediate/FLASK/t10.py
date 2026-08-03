#t10 movie collection
from flask import Flask
app = Flask(__name__)
movies = [
    {"id":0, "movie_name": "JanaNayagan", "rating":4.5},
    {"id":1, "movie_name": "LEO", "rating":4.8},
    {"id":2, "movie_name": "GOAT", "rating":4.2},
]

@app.route("/movies", methods=["GET"])
def getmovies():
    return movies

@app.route("/movies", methods=["POST"])
def addmovies():
    data = request.json
    movies.append(data)
    return "Added Successfully"

@app.route("/movies/<int:id>", methods=["PUT"])
def updatemovies(id):
    data = request.json
    for m in movies:
        if m["id"] == id:
            m["rating"] = data["rating"]
            return "Updated Successfully"
    return "Update Failed"

if __name__ == "__main__":
    app.run(debug=True)