import { useDispatch, useSelector } from "react-redux";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  Navbar  from "./Components/Navbar/Navbar";
import  CardSidebar  from "./Components/CardSidebar/CardSidebar";
import { useEffect, useState } from "react";
import { fetchProds } from "./Slice/products";

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
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Home/>}/>
        <Route path="/womens" element={<Home/>}/>
        <Route path="/jewellery" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;