import numpy as np

arr1D = np.array([1, 2, 3])
print(arr1D)

arr2D = np.array([[1, 2, 3], [6, 7, 8]])
print(arr2D)

arr3D = np.array([[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]])
print(arr3D)

#   np functions
# zeros
e = np.zeros((3, 3))
print(e)

# ones
one = np.ones((3, 3), bool)
print(one)

#eye - to create identity matrix, eye(x) where x = diagonal length 
eye = np.eye(3)
print(eye)

# arange - like range function. Start - End - Step
rangeArr = np.arange(0, 12, 2)
print(rangeArr)

#linespace
lines = np.linspace(0, 1, 5)
print(lines)

#randarray
randarray = np.random.rand(2, 2)
print(randarray)

#slicing and striding
arrtest1 = np.array([10, 20, 30, 40, 50])
print(arrtest1[0])
print(arrtest1[0:3])

arrtest2 = np.array([[10, 20, 30, 40, 50], [60, 70, 80, 90, 100]])
print(arrtest2[0])
print(arrtest2[0][2]) #  both are same
print(arrtest2[0,2])  #  both are same (but use this)
#full col
print(arrtest2[:, 1])
#submatrix
print(arrtest2[0:2, 1:5])
#condition filter
print(arrtest2[arrtest2>20])

# lis = [1, 2, 3]
# list1 = [3, 4, 5]

# res = lis+list1
# print(res)

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a+b)
print(a*b)
resultcon = np.concatenate((a, b))
print(resultcon)

#matrix multiplication
print(np.dot(a, b))

matrixtest = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
#transpose
print(matrixtest)
print(matrixtest.transpose())

arr3 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
flat = arr3.flatten()
print(flat)
reshapes = flat.reshape(3, 3)
print(reshapes)