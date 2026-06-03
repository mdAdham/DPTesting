class Company:
    totalEMP = 0
    
    def __init__(self):
        Company.totalEMP+=1
        
    @classmethod
    def show(cls):
        print(cls.totalEMP)
        
c1 = Company()
c1.show()
c2 = Company()
c2.show()
c3 = Company()
c3.show()