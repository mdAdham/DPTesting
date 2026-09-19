import React from 'react'
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './Pages/All/All';
import Mens from './Pages/Mens/Mens';
import Electronics from './Pages/Electronics/Electronics';
import Jewellery from './Pages/Jewellery/Jewellery'
import Women from './Pages/Women/Women';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<All />}/>
        <Route path='/mens' element={<Mens />}/>
        <Route path='/electronics' element={<Electronics />}/>
        <Route path='/jewellery' element={<Jewellery />}/>
        <Route path='/women' element={<Women />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;