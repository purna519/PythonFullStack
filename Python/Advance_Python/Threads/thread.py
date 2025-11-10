import threading
import time

def numbers():
    for i in range(1,6):
        print(i)
        # time.sleep(4)
    
def alphabets():
    for j in ['a','b','c','d','e','f']:
        print(j)

t1 = threading.Thread(target=numbers)
t2 = threading.Thread(target=alphabets)

t2.start()
t1.start()

print("All threads completed there works")