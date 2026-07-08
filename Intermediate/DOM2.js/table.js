let data = [
    {
        ID:1,
        Name: "Adham",
        Age:17
    },
    {
        ID:2,
        Name: "Chandru",
        Age:17
    },
    {
        ID:3,
        Name: "Anoushka",
        Age:17
    }
]

let keys = Object.keys(data[0]);
let vals = Object.values(data[0]);

console.log(data.length);



let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

keys.map((item)=>{
    let th = document.createElement("th");
    th.innerHTML = item;
    thead.appendChild(th);
});

data.map((item)=>{
    let tr = document.createElement("tr");

    Object.values(item).map((x)=>{
        let td = document.createElement("td");
        td.innerHTML = x;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);
});


document.body.append(table);
table.appendChild(thead);
table.appendChild(tbody);

// data.forEach((element)=>{
//     td.data = element.id;
//     tr.appendChild(td);

//     td.data = element.Name;
//     tr.appendChild(td);

//     td.data = element.Age;
//     tr.appendChild(td);
// });