import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="adham2009",
    database="flaskCrud",
    cursorclass=pymysql.cursors.DictCursor
)

cursor = connection.cursor()

cursor.execute("CREATE DATABASE IF NOT EXISTS flaskCrud")
connection.select_db("flaskCrud")
cursor.execute("""CREATE TABLE IF NOT EXISTS STUDENTS(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    STUDENTNAME VARCHAR(100),
    COURSENAME VARCHAR(50),
    AGE INT
)
""")

connection.commit()
print("Database and Table Created")