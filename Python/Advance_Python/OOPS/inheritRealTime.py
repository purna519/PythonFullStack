class person:
    def __init__(self,name,subject):
        self.name = name
        self.subject = subject
    
class student(person):
    def __init__(self, name, subject,roll,grade):
        person.__init__(self,name,subject)
        person.roll = roll
        person.grade = grade

    def display(self):
        print(f"Name is ",self.name,"subject is ",self.subject)
        print("the grade is ",self.grade,"roll number is ",self.roll)

class teacher(person):
    def __init__(self, name, subject,salary):
        super().__init__(name, subject)
        person.salary = salary
    
    def display(self):
        print("Teacher name is : ",self.name,"Her subject is ",self.subject,"Salary is : ",self.salary)


s1 = student("john","Maths",21,"A")
s1.display()

s2 = teacher("Sushma","Maths",30000)
s2.display()
