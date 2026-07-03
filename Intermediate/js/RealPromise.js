// all
// -> first false

const getProducts = new Promise((resolve, reject)=>{
    fetch("https://fakestoreapi.com/products").then((res)=>{
        if (res.ok){
            resolve(res.json());
        }
        else {
            reject("Unable to Get");
        }    
    });
});

const getCategory = new Promise((resolve, reject)=>{
    fetch("https://fakestoreapi.com/products/categories").then((res)=>{
        if (res.ok){
            resolve(res.json());
        }
        else {
            reject("Unable to Get");
        }
    });

});

const getUser = new Promise((resolve, reject)=>{
    fetch("https://fakestoreapi.com/users").then((res)=>{
        if (res.ok){
            resolve(res.json());
        }
        else {
            reject("Unable to Get");
        }
    });

});

// Promise.all([getProducts, getCategory, getUser]).then((res)=>console.log(res)).catch((err)=>console.log(err));
// Promise.allSettled([getProducts, getCategory, getUser]).then((res)=>console.log(res)).catch((err)=>console.log(err));
Promise.race([getProducts, getCategory, getUser]).then((res)=>console.log(res)).catch((err)=>console.log(err));

// Promise.all()
// Runs all promises in parallel.
// ✅ Resolves when ALL promises succeed.
// ❌ Rejects immediately if ANY one promise fails.

// Promise.allSettled()
// Runs all promises in parallel.
// ✅ Always waits for ALL promises to finish.
// Returns the status ("fulfilled" or "rejected") and result/error for each promise.

// Promise.race()
// Runs all promises in parallel.
// Returns the result/error of the FIRST promise that settles
// (whether it fulfills OR rejects).

// Promise.any()
// Runs all promises in parallel.
// ✅ Resolves with the FIRST fulfilled promise.
// ❌ Rejects only if ALL promises reject.