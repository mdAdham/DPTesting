#t7
from flask import Flask

app = Flask(__name__)

products = [
    {"id":0, "name": "Samsung V19", "price":26000},
    {"id":1, "name": "IPhone 67", "price":158000},
    {"id":2, "name": "Nothing X69", "price":160000}
]

@app.route("/products", methods=["GET"])
def getproducts():
    return products

@app.route("/products", methods=["POST"])
def addproducts():
    data = request.json
    products.append(data)
    return "Added Successfully"

@app.route("/products/<int:id>", methods=["PUT"])
def updateproducts(id):
    data = request.json
    for p in products:
        if p[id] == id:
            p["price"] = data["price"]
            return "Price Updated Successfully"
    return "Update Failed"

if __name__ == "__main__":
    app.run(debug=True)