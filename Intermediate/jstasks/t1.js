function sum(...numbers){
    let sum = 0;
    for (i of numbers)
    {
        sum += i;
    }
    return sum;
}

console.log(sum(10, 20, 30));