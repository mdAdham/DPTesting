import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './Pages/All/All';
import Mens from './Pages/Mens/Mens';
import Electronics from './Pages/Electronics/Electronics';
import Jewellery from './Pages/Jewellery/Jewellery'
import Women from './Pages/Women/Women';

import Beauty from "./Pages/Beauty/Beauty"
import Fragrances from "./Pages/Fragrances/Fragrances"
import Furniture from "./Pages/Furniture/Furniture"
import Groceries from "./Pages/Groceries/Groceries"

import "./App.css"

export const PassingValue = createContext();
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok){
          throw Error("Unable to connect to the API");
        }
        else {
          const prod = await res.json();
          
          setProducts(prod.products);
          // console.log(prod.products);
          // {console.log(prod.products.map((item)=>(item.category)))}
          // beauty fragrances furniture groceries
        }
      }
      catch(error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
      </div>
      <PassingValue.Provider value={products}>
        {/* <Routes>
          <Route path='/' element={<All />}/>
          <Route path='/mens' element={<Mens />}/>
          <Route path='/electronics' element={<Electronics />}/>
          <Route path='/jewellery' element={<Jewellery />}/>
          <Route path='/women' element={<Women />}/>
        </Routes> */}

        <Routes>
          <Route path='/' element={<All/>}/>
          <Route path='/beauty' element={<Beauty/>}/>
          <Route path='/fragrances' element={<Fragrances/>}/>
          <Route path='/furniture' element={<Furniture/>}/>
          <Route path='/groceries' element={<Groceries/>}/>
        </Routes>
      </PassingValue.Provider>
    </BrowserRouter>
  )
}

export default App;