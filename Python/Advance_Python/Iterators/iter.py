# we can create our own loop function using iterators
#  iterator is used to loop like a pro

a = [1,2,3,4,5]

# iterOfa = iter(a)

# print(next(iterOfa))
# print(next(iterOfa))
# print(next(iterOfa))
# print(next(iterOfa))
# print(next(iterOfa))

# print(next(iterOfa)) Here if we print after the numbers completing it will give error

# let's print our own function to loop

def loopThrough(list1):
    item1 = iter(list1)
    while True:
        try:
            print(next(item1))
        except StopIteration:
            break

loopThrough(a)
