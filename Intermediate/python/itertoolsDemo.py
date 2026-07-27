import itertools

for i in itertools.count(10):
    print(i)
    if i == 15:
        break
    
#cycle
options = ["rock", "paper", "scissor"]
c = itertools.cycle(options)

for i in range(6):
    print(next(c))
    
for i in itertools.repeat("Python", 6):
    print(i)

# permutation
items = ['A', 'B', 'C']
print(list(itertools.permutations(items, 2)))
print(list(itertools.combinations(items, 2)))

#product
print(list(itertools.product([1, 2], ['A', 'B'])))