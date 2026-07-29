import pandas as pd

data_list = [
    {"Name":"Adham", "Age": 17, "City":"Pondicherry"},
    {"Name":"Chandru", "Age": 17, "City":"Pondicherry"},
    {"Name":"Santhosh", "Age": 18, "City":"Chennai"},
    {"Name":"Anoushka", "Age": 19, "City":"Thenkasi"},
    {"Name":"Sanjana", "Age": 19, "City":"Chennai"},
    {"Name":"Gary", "Age": 20, "City":"Chennai"}
]

df = pd.DataFrame(data_list)

df.to_csv("output.csv", index=False)
print("Data Stored Successfully")

csvData = pd.read_csv("output.csv")
print(csvData)
print(csvData.describe())