function hello() {
    console.log("Hello World");
}
hello();

const func = ()=>{
    console.log("Hello From Func Function");
};

func();

// IIFE
const func2 = function(){
    console.log("hello From Func2 Function");
};

func2();

function Student(name){
    this.name = name
}

let s1 = new Student("Adham")
console.log(s1.name);
