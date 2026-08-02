#t3
from flask import Flask

app = Flask(__name__)

@app.route("/name/<username>")
def printusername(username):
    return f"Hello {username}"

if __name__ == "__main__":
    app.run(debug=True)