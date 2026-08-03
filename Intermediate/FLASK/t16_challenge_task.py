#t16 Challenge Task #Bank Account
from flask import Flask
app = Flask(__name__)

accounts = [
    {"account_no": 12519, "holder_name": "Adham", "balance": 540},
    {"account_no": 12520, "holder_name": "Santhosh", "balance": 120000},
    {"account_no": 12521, "holder_name": "Rohan", "balance": 119999}
]

@app.route("/accounts", methods=["GET"])
def getaccounts():
    return accounts

@app.route("/accounts", methods=["POST"])
def addaccounts():
    data = request.json
    accounts.append(data)
    return "Added New Account Successfully"

@app.route("/accounts/<int:account_no>", methods=["PUT"])
def depositeaccount(account_no):
    data = request.json
    for a in accounts:
        if a["account_no"] == account_no:
            a["balance"] += data["balance"]
            return "Deposited Successfully"
    return {"message": "Account Not Found"}


if __name__ == "__main__":
    app.run(debug=True)