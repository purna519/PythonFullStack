from abc import ABC,abstractmethod

class person(ABC):
    @abstractmethod
    def get_details(self):
        pass

class student(person):
    def __init__(self,name,roll,marks):
        self.__name = name
        self.__roll = roll
        self.__marks = marks
    
    def get_details(self):
        print("Name : ",self.__name)
        print("Roll : ",self.__roll)
        print("Marks : ",self.__marks)
    
class Teacher:
    def __init__(self):
        self.students = []

    def add_student(self, name, roll_no, marks):
        s = student(name,roll_no,marks)
        self.students.append(s)

    def get_details(self):
        for student in self.students:
            student.get_details()
    
te = Teacher()
te.add_student("Purna",31,90)
te.get_details()


        


        