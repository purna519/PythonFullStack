import sys
number=10

print(number.__sizeof__())

print(bin(number))
print(oct(number))
print(hex(number))

print(int(0b1010))

#type conversions:
# 1.int
# 2.bool
# 3.complex(real+imaginary number)
# 4.floot
# 5.string

print(int(12.59))
print(int(True))
# print(int(12+4j))intiger cannot convert the complex number
print(type(int('10')))


print(bool(0))
print(bool('hello'))
print(bool(12+9j))

print(complex(10))
# print(complex('hello'))string cannot be converted into a complex number
print(complex(12.59))
print(complex(True))


print(float(10))
# print(float(12+9j))
print(float('12.79'))
print(float(True))

print(str(10))
print(str(12.59))
print(str(True))
print(str(12+9j))