import { createSlice } from "@reduxjs/toolkit";

// states for:
//      quantity
//      removefromcart
//      clearcart
//      addtocart

export const cartSlice = createSlice(
    {
        name:"cart",
        initialState:{
            items:[]
        },
        reducers:{
            addtoCart:(state, action)=>{
                const product = action.payload;
                const existing = state.items.find((x)=>x.id===product.id);
                if (existing){
                    existing.qty+=1;
                }
                else{
                    state.items.push({
                        ...product, qty:1
                    });
                }
            },
            increaseqty:(state, action)=>{
                const item = state.items.find((item)=>item.id===action.payload);
                if (item){
                    item.qty+=1;
                }
            },
            decreaseqty:(state, action)=>{
                const item = state.items.find((item)=>item.id===action.payload);
                if (item && item.qty > 1){
                    item.qty-=1;
                }
            },
            removeFromCart:(state, action)=>{
                state.items = state.items.filter((item)=>item.id!==action.payload);
            },
            clearCar:(state)=>{
                state.items = []
            }
        }
    }
);

export const {addtoCart, increaseqty, decreaseqty, removeFromCart, clearCar} = cartSlice.reducer;