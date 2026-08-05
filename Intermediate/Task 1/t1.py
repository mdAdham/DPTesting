class Employees:
    def __init__(self):
        self.employee = []
        self.idcounter = 100
        
    def getinput(self):
        for i in range(1, 6):
            name = input(f"Enter Name({self.idcounter}): ")
            salary = int(input(f"\tEnter Salary: "))
            
            self.employee.append({"id":self.idcounter, "name":name, "salary":salary})            
            self.idcounter+=1
    
    def display(self):
        for e in self.employee:
            print(e)
    
    def findhighsalary(self):
        maxx = 0
        index = 0
        for i, e in enumerate(self.employee):
            if maxx <= e["salary"]:
                maxx = e["salary"]
                index = i
            else:
                pass
        
        print(self.employee[index]["name"] + " - " + str(self.employee[index]["salary"]))

emps = Employees()

emps.getinput()
emps.display()
emps.findhighsalary()

