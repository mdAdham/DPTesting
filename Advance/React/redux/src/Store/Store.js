import { configureStore } from "@reduxjs/toolkit";
import { coundSlice } from "../slice/slice";

export const store = configureStore(
    {
        reducer:{
            counts:coundSlice.reducer
        }
    }
);