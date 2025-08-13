# comparission oparators/relational ship oparators

print(20>10)
print(10<20)
print(25>=20)
print(10<=20)
print(10==10)
print(10!=10)

# logical oparators
print((20>10)and(10<20))
print((10!=10)or(10<20))
print(not((20>10)and(10<20)))


# sting concatination:
name='sai'
name1='kiran'
fullname=name+name1

print(fullname)

# string repetation
print(name*5)

'''
Conditional statement:
    A block of code will be processed based on the condition which is going to return boolen statement
a.simple if
b.if else
c.elif lader
d.nested 
e.Match    
'''
climate='not raining'

if climate=='raining':
    print('so today climate is freezing')


# side=input('Enter the coin side:')
# if(side=='head'):
#     print('Team A wins')
# else:
#     print('Team B wins')      
# skill=input('Do you know driving:')
# if skill=='yes':
#     print('yes, iknow driving')
# else:
#     print('I dont know how to drive')    


number=int(input('Enter your number:'))
if number%2==0:
    print('It is an even number')
else:
    print('The number is odd') 



# ice=input('Enter you choice of flavor:')
# if ice=='venela':
#     print('You have choosen veneela flavoer ice cream')
# elif ice=='choco':
#     print('You have choosen choco flavoer ice cream')
# elif ice=='redwellwet':
#     print('You have choosen redwellwet flavoer ice cream') 
# else:
#     print('sorry we dont hove your choice of icecream')                      

bill=int(input('Enter the bill amount:'))
if bill>=1000 and bill<2000:
    discount=bill*0.1
    finalbill=bill-discount
    print(finalbill)
elif bill>=2000 and bill<5000:
    discount=bill*0.15
    finalbill=bill-discount
    print(finalbill) 
elif bill>=5000:
    discount=bill*0.25
    finalbill=bill-discount 
    print(finalbill)
else:
    print('NO discount')          