// setTimeout(()=>{
//     console.log(("Hello World"));
// }, 5000);

// console.log("Welcome to Promises");

const bookTicket = new Promise((resolved, reject)=>{
    let booked = true;
    if (booked) {
        resolved("Ticket Booked successfully")
    }
    else {
        reject("Failed to book ticket");
    }
});

bookTicket.then((res)=>console.log(res)).catch((err)=>console.log(err));

// 4 Methods for API
// get, post, put, delete

// fetch("https://fakestoreapi.com/products/", );

// const getProducts = new Promise((resolve, reject)=>{
//     fetch("https://fakestoreapi.com/products/1").then((response)=>{
//         if (response.ok) {
//             resolve(response.json());
//         }
//         else {
//             reject("Failed to fetch products");
//         }
//     })
// });

// getProducts.then((data)=>console.log(data)).catch((error)=>console.log(error));

// console.log("After this");

let Adham1 = new Promise((resolved, rejected)=>{
    let book = true;
    setTimeout(()=>{
        console.log("Hello");
        
    }, 5000)
    // if (book) {
    //     resolved("Adham1 booked");
    // }
    // else {
    //     rejected("Adham1 failed to book the ticket");
    // }
});
let Adham2 = new Promise((resolved, rejected)=>{
    let book = true;
    if (book) {
        resolved("Adham2 booked");
    }
    else {
        rejected("Adham2 failed to book the ticket");
    }
});

Promise.allSettled([Adham1, Adham2]).then((res)=>console.log(res)).catch((err)=>console.log(err));