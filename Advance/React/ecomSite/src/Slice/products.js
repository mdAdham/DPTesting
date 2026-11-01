import { createAsyncThunk, createSlice, isFulfilled, isRejected } from "@reduxjs/toolkit";

export const fetchProds = createAsyncThunk("products/fetchProds", async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok){
        throw Error("Failed to Get Products");
    }

    return await response.json();
});

// const fetchProduct = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     if (!response.ok){
//         throw Error("Failed to Fectch Data");
//     } else {
        
//         return await response.json();
//     }
// }

export const prodSlice = createSlice(
    {
        name: "products",
        initialState: {
            prods: [],
            loading:false,
            error:null
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(fetchProds.pending, (state)=>{
                state.loading = true;
                state.error = null;
            }).addCase(fetchProds.fulfilled, (state, action)=>{
                state.loading = false;
                state.prods = action.payload;
                state.error = null;
            }).addCase(fetchProds.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
        }

    }
);

export default prodSlice.reducer;