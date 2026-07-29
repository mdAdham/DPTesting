import pandas as pd

data = {
    "Name":["Adham", "Santhosh", "Anoushka", "Sanjana"],
    "Age":[17, 18, 19, 20],
    "City":["Pondicherry", "Chennai", "Thenkasi", "Chennai"]
}

print(data)

dataframe = pd.DataFrame(data, index=['a', 'b', 'c', 'd'])

print(dataframe)

data_list = [
    {"Name":"Adham", "Age": 17, "City":"Pondicherry"},
    {"Name":"Chandru", "Age": 17, "City":"Pondicherry"}
]
print(data_list)

data_list_frame = pd.DataFrame(data_list)
print(data_list_frame)

print(data_list_frame["Name"])

# loc -> labled based index
print(data_list_frame.loc[1])

# iloc -> position based index
print(data_list_frame.iloc[0:2, 0:2])

print(data_list_frame.query("Age>10"))