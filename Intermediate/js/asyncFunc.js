const getProducts = async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    if (res.ok){
        console.log(await res.json());
    }
    else {
        console.log("Error1");
    }
}

async function getUser() {
    const res = await fetch("https://fakestoreapi.com/users");
    if (res.ok){
        console.log(await res.json());
    }
    else {
        console.log("Error2");
    }
}

getProducts();
getUser();

// async function getGit() {
//     const res = await fetch("https://github.com/mdadham");
//     if (res.ok){
//         console.log(res);
//     }
//     else {
//         console.log("Error2");
//     }
// }

// getGit();