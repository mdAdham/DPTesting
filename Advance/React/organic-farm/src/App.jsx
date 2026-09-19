import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import All from './Pages/All/All'
import Vegetables from './Pages/vegetables/vegetables'
import Fruits from './Pages/fruits/fruits'
import Greens from './Pages/greens/greens'
import Meat from './Pages/meat/meat'

import "./App.css"

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar/>
        <div className="route-page">
          <Routes>
            <Route path='/' element={<All/>} />
            <Route path='/vegetables' element={<Vegetables/>} />
            <Route path='/fruits' element={<Fruits/>} />
            <Route path='/greens' element={<Greens/>} />
            <Route path='/meat' element={<Meat/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;