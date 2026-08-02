#t4
from flask import Flask

app = Flask(__name__)

@app.route("/cube/<int:num>")
def cube(num):
    return f"Cube = {num*num*num}"

if __name__ == "__main__":
    app.run(debug=True)