#t5
from flask import Flask

app = Flask(__name__)

@app.route("/vote/<int:age>")
def voting(age):
    if age >= 18:
        return "Eligible"
    else:
        return "Not Eligible"

if __name__ == "__main__":
    app.run(debug=True)