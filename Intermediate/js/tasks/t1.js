// 31. Print numbers divisible by 3 from 1 to 100.

let list = []

for (let i = 1; i <=100; i++) {
    if (i%3 == 0) {
        list.push(i);
    }
}

console.log(list);