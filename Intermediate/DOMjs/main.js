// Id
// name
// Tagname
// Classname
// Queries Selector




//innertext
//innerHTML
//textcontent

let head = document.getElementById("heads");
head.innerText = "Hello Adham";
let toogle = false;

var show = ( a, b)=>{
    if (toogle != true){
        head.innerText = `Hello BackupCookie ${a + b}`;
        toogle = true;
    }
    else{
        head.innerText = `Hello Adham ${a + b}`;
        toogle = false;
    }
}

let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", ()=>{
    btn.innerHTML = "Completed";
});

// let userName = document.getElementById("userName");

// userName.addEventListener("change", ()=>{
//     head.textContent = userName.value;
// });

let userInput = document.getElementsByTagName("input")[0];

const getValue = (e)=> {
    head.innerHTML = e.target.value;
}

