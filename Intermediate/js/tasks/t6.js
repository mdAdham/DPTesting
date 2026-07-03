// 83. Add GST to all product prices.

let productPrize = [100, 200, 300, 400, 500]

let GST = 20 / 100;

console.log("Before GST: ", productPrize);

// productPrize.map((val, index)=>{
//     productPrize[index] = val + (val * GST);
// });

productPrize = productPrize.map((val)=>val+(val*GST));

console.log("After GST: ", productPrize);