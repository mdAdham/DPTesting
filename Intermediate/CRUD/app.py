from flask import Flask
from routes.studentRoutes import students

app = Flask(__name__)
app.register_blueprint(students)

app.run(debug=True)

# if __name__ == "__main__":
#     app.run(debug=True)