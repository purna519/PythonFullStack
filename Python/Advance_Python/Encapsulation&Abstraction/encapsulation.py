# Encapsulation — "Wrapping things safely"
# Definition:
# ============
# => Encapsulation means hiding internal details of a class and protecting data by controlling access.

# => Just like a capsule hides bitter medicine inside a shell,
# => you hide variables and internal logic so that the outside world can’t mess with it directly.

class bank:
    def __init__(self):
        self.__balance = 0
    
    def deposit(self,amount):
        if amount > 0:
            self.__balance += amount
            print("Amount is deposited")
        else:
            print("Deposit amount correctly")
    
    def getBalance(self):
        print("Balance : ",self.__balance)

    def credit(self,amount):
        if amount < self.__balance:
            self.__balance -= amount
            print("Amount succesfully credited")
        else:
            print("Balance is insufficient")
        

b = bank()
b.getBalance()
deposiMoney = int(input("Enter deposit money : "))
b.deposit(deposiMoney)
b.getBalance()
creditMoney = int(input("Enter credit Money : "))
b.credit(creditMoney)