from abc import ABC,abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start_engine(self):
        pass

class Car(Vehicle):
    def __init__(self):
        self.__engine_status = "Off"

    def start_engine(self):
        self.__engine_status = "On"
        print("Car engine started")

    def get_engine_status(self):
        return self.__engine_status

c = Car()
c.start_engine()
print("Engine:", c.get_engine_status())
