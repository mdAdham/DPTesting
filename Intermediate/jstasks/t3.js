let testcase = 1234;
let temp = testcase;

let length = 0;

// console.log(parseInt(temp/10));


while (temp != 0)
{
    temp = parseInt(temp / 10);
    length++;
}

console.log(length);
