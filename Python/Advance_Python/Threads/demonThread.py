import threading
import time

class my_thread:
    def infiniteLoop():
        while True:
            print("Thread is running")
            time.sleep(1)

t = threading.Thread(target=my_thread.infiniteLoop)

t.daemon = True
t.start()

time.sleep(2)
print("Main function")
