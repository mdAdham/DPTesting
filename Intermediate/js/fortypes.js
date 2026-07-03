let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// x = arr val
for (let x of arr)
{
    console.log(x);
}
// x = arr index
for (let x in arr)
{
    console.log(x);
}
// For Each
arr.forEach((item)=>{
    console.log(item);
});
arr.forEach((index, x)=>{
    console.log(x, index);
});
// For of
