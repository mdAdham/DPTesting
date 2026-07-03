// 79. Convert all names to uppercase using forEach.

let list = ["adham", "santhosh", "anoushka", "sanjana", "gary", "rohan"]

console.log("Before converting: ", list);

list.forEach((val, index)=>{
    list[index] = val.toUpperCase();
});

console.log("After converting: ", list);