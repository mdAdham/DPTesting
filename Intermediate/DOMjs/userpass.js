let user = document.getElementById("username");
let pass = document.getElementById("pass");

let userform = document.getElementById("submitform");

// userform.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log(user.value);
//     console.log(pass.value); 
// });

const getDetails = (e)=>{
    e.preventDefault();
    console.log(user.value);
    console.log(pass.value); 
}

// onclick for click button tags
// onchange for a input tags events
// onsubmit while using form tags

// Tagname
// let btn = document.getElementsByTagName("button")[0];
let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    btn.textContent = "Clicked";
    // btn.style.display = "none";
});

let btns = document.querySelectorAll(".btns");

console.log(btns);

btns.forEach((element)=>{
    element.addEventListener("click", ()=>{
        element.innerHTML = "Clicked";
    })
});