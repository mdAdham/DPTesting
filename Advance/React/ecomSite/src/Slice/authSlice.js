import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice(
    {
        name:"auth",
        initialState:{
            isLoggedin:false,
            user:null,
            error:"",
        },
        reducers:{
            login:(state, action)=>{
                const {email, password} = action.payload;
                if (email==="admin@gmail.com" && password==="1234"){
                    state.isLoggedin=true;
                    state.user = email;
                    state.error = "";
    
                    console.log("success");                
                }
                else{
                    state.error = "Invalid Email or Password";
                    console.log("Faliure");
                }
            },
            logout:(state)=>{
                state.isLoggedin=false;
                state.user=null;
                state.error="";
            }
        }
    }
);

export const {login, logout} = authSlice.actions;