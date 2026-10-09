import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Slice/authSlice";
import { cartSlice } from "../Slice/cartSlice";

export const store = configureStore(
    {
        reducer: {
            auth:authSlice.reducer,
            cart:cartSlice.reducer
        }
    }
);