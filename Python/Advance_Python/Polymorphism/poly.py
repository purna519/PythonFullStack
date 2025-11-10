# Poly = many
# Morph = forms

# So, Polymorphism means:
# “Same thing behaves differently depending on who uses it.”

class poly:
    def add(self,a,b,c):
        return a+b+c
    
class poly1:
    def add(self,a,b,c):
        return a-b-c

p = poly()
p1 = poly1()

print(p.add(1,2,3))
print(p1.add(1,2,3))


# In real time scenario

class Person:
    def role(self):
        print("Person in school")

class Student(Person):
    def role(self):
        print("I am a student")

class Teacher(Person):
    def role(self):
        print("I am a teacher")

people = [Student(), Teacher()]

for p2 in people:
    p2.role()


# Operator Overloading

class Number:
    def __init__(self, value):
        self.value = value

    def __add__(self, other):
        return self.value + other.value

a = Number(10)
b = Number(20)

print(a + b)
