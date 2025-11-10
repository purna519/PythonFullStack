# Single Inheritance
# ====================
# class Animal:
#     def bark(self):
#         print("Some animals will bark")

# class Dog(Animal):
#     def display(self):
#         print("Dog class Called")

# D1 = Dog()
# D1.bark()
# D1.display()


# Multiple Inheritance
# ========================
class Father:
    def skills(self):
        print("Knows carpentry")

class Mother:
    def other(self):
        print("Knows painting")

class Child(Father, Mother):
    def skills(self):
        super().skills()
        super().other()
        print("Learns both")

c = Child()
c.skills()


# When method is ovveridden in both then child class will override the method of parent class

