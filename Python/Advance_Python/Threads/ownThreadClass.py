import threading



class threads(threading.Thread):
    def run(self):
        for i in range(3):
            print(self.name)
    
t1 = threads(name="❤️ thread TholiPrema")
t2 = threads(name="😘 Thread Godavari")

t1.start()
t2.start()

