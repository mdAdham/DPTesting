// Amstrong Num (153)

let a_num = 153;
let temp = a_num;

let sum = 0;

let len = a_num.toString().length; 

while (a_num > 0)
{
    let r = a_num % 10;
    // a_mun = 153 % 10 = 3, 
    sum += r ** len;
    // sum += 3 ** 3
    a_num = parseInt(a_num / 10);
    // a_num = parseInt(a_num / 10)
}

if (sum == temp)
    console.log("Amstrong Number");
else
    console.log("Not an Amstrong Number");

/*
    
    num = 234 (length 3)
    amr = (2 ^ length) + (3 ^ length) + (4 ^ length)

    num == amr -> amstrong num else not amstrong

*/