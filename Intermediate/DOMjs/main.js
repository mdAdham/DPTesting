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

var show = ()=>{
    if (toogle != true){
        head.innerText = "Hello BackupCookie";
        toogle = true;
    }
    else{
        head.innerText = "Hello Adham";
        toogle = false;
    }
}