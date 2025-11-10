class person:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def __greet__(self):
        print("Hi hello,",self.name,"You entred your age is : ",self.age)

    def display(self):
        print("Display function is called")
        print(self.name)


p1 = person("John",26)
p1.__greet__()
p1.display()
