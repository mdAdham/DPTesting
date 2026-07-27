import collections

# arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
# print(collections.Counter(arr))
# string = "Programming"
# print(collections.Counter(string))

Stud = collections.namedtuple("Student", ["name", "age"])
a = Stud("Adham", 33)
print(a.name)
print(a.age)