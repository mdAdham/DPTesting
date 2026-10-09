// createSlice -> hook
import {createSlice} from "@reduxjs/toolkit"

export const coundSlice = createSlice(
    {
        name: "Counting",
        initialState: {count:0},
        reducers:{
            Increment:(state, action)=>{state.count+=action.payload}
        }
    }
);

export const {Increment} = coundSlice.actions;