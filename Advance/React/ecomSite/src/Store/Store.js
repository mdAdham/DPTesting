import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Slice/authSlice";
import { cartSlice } from "../Slice/cartSlice";
import { prodSlice } from "../Slice/products";

export const store = configureStore(
    {
        reducer: {
            auth:authSlice.reducer,
            cart:cartSlice.reducer,
            product:prodSlice.reducer
        }
    }
);