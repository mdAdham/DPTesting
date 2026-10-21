import { createSlice } from "@reduxjs/toolkit";

const fetchProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok){
        throw Error("Failed to Fectch Data");
    } else {
        
        return await response.json();
    }
}

export const prodSlice = createSlice(
    {
        name: "products",
        initialState: {
            prods: fetchProduct()
        }

    }
);