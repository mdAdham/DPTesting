let newdiv = document.createElement("div");
let btn = document.createElement("button");

btn.innerHTML = "Click";
btn.setAttribute("id", "btn");
btn.style.fontSize = "1.5em";
btn.style.fontWeight = "bold";

newdiv.appendChild(btn);
document.body.append(newdiv);
