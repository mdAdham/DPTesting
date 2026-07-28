import pandas as pd

s1 =  pd.Series([10, 20, 30, 40, 50])
print(s1)
s2 =  pd.Series([10, 20, 30, 40, 50], index=['a', 'b', 'c', 'd', 'e'])
print(s2)

print(s2['a'])
print(s2+10)

s3 = pd.Series([20, 10, 40, 30, 50], index=['a', 'b', 'c', 'd', 'e'])

print("starting")
print(s3.sort_values())
print(s3.sort_values(ascending=False))
print(s3.sort_index())
print(s3.isnull())
print(s3.fillna(0))
print(s3.tolist())
print(s3.to_numpy())
print(s3.to_csv())
print(s3.head(2))
print(s3.tail(2))
print(s3.unique())

s = pd.Series(['A', 'B', 'C', 'D', 'A', 'B', 'D'])
print(s.value_counts())

# form a dict
print("dict")
data = {"apple":3, "banana":6, "cherry":2, "kiwi":1, "orange":5}
s4 = pd.Series(data)
print(s4)
print(s1+s2)