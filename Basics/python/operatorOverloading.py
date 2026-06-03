class cart:
    def __init__(self, price):
        self.price = price
    
    def __add__(self, other):
        return self.price + other.price
    
item1 = cart(30)
item2 = cart(20)

summ = item1 + item2 # returns int

print(item1 + item2)