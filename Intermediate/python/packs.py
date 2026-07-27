# sqrt
# factorial
# pow
# ceil
# floor
# gcd
# fabs
# sin
# cos
# log
# sample

from math import *

# val = int(input("Enter a value to be sqrted: "))
# print(sqrt(val))

# print(factorial(val))
print(pi)
print(sin(degrees(radians(90))))
print(log(100, 10))

import random

numbers = range(1, 50)

print(random.sample(numbers, 6))

cards = [1, 2, 3, 4, 5]
random.shuffle(cards)
print(cards)

color = ["red", "green", "blue"]
print(random.choice(color))

names = ['A', 'B', 'C', 'D']
print(random.choices(names, k=3))
print(random.sample(names, 3))



finish = False

while not finish:
    arr = random.sample(numbers, 5)
    print(arr)
    num = arr[0]
    if (num == 1):
        finish = True
        print(num)
    else:
        pass