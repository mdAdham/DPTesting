let arr = [10, 20, 30, 40, 51, 61, 71, 81]

// arr.map((x)=>console.log(x));

const total = arr.reduce((acc, currval)=>acc+currval);

// console.log("Sum is: ");

// console.log(total);

const even = arr.filter((x)=>x%2==0);
const odd = arr.filter((x)=>x%2!=0);

// console.log(even);
// console.log(odd);

// console.log(arr);
// arr.push(911);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(1);
// console.log(arr);

// let sub = arr.slice(2, 5);
// console.log(sub);

// let sub2 = arr.splice(2, 3, 100, 101, 102);
// console.log(sub2);
// console.log(arr);

// let text = "Hello World";

// let splitedtext = text.split(" ");

// console.log(splitedtext);

// let joins = splitedtext.join("-");
// console.log(joins);

// console.log(arr.includes(20));

// console.log(arr.indexOf(203));

// arr.sort();
// console.log(arr);

// let set = new Set([10, 20, 30, 40])
// console.log(set);

let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]

let c = [...a, ...b]

// console.log(c);

// let user = {
//     name:"Kavin",
//     age:20
// }
// let details = {
//     city:"CSE"
// }

// let res = {...user, ...details}
// console.log(res);

// let word = "Hello World";
// console.log([...word]);

// let[first, second, ...third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

let person = {
    name:"Adham",
    age:17,
    city:"Pondy",
    course:"CSE"
}

const {name, course, ...other} = person;

console.log(name, course);
console.log(other);

export function greet(){
    console.log("hello");
}