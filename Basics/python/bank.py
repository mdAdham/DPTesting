class BankAccount:
    def __init__(self):
        self.balance = 10000
        
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("no balance")
            
class FirstUser(BankAccount):
    def use_card(self, amount):
        self.withdraw(amount)
        
class SecondUser(BankAccount):
    def use_card(self, amount):
        self.withdraw(amount)
        
u1 = FirstUser()
u2 = SecondUser()

u1.use_card(3000)
u2.use_card(5000)