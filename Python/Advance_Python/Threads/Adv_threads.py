import threading

count = 0
lock = threading.Lock()

def increase():
    global count
    for i in range(1000000):
        count += 1
    

t1 = threading.Thread(target=increase)
t2 = threading.Thread(target=increase)

t1.start()
t2.start()

t1.join()
t2.join()

print("Count value : ",count)