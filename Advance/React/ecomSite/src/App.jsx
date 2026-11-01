import { useDispatch, useSelector } from "react-redux";

import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Checkout from "./Pages/Checkout/Checkout";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  Navbar  from "./Components/Navbar/Navbar";
import  CardSidebar  from "./Components/CardSidebar/CardSidebar";
import { useEffect, useState } from "react";
import { fetchProds } from "./Slice/products";

import "./App.css";

const App = ()=>{
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedin);
  const dispatch = useDispatch();

  const [cartOpen, setCartOpen] = useState(false);
  useEffect(()=>{
    if (isLoggedIn){
      dispatch(fetchProds());
    }
  }, [isLoggedIn, dispatch])

  if (!isLoggedIn){
    return <Login/>
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar openCart = {()=>setCartOpen(true)}/>
        <CardSidebar isOpen={cartOpen} closeCart={() => setCartOpen(false)}/>
      </div>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/category/:category" element={<Category/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;