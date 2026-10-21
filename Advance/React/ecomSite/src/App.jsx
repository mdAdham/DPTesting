import { useSelector } from "react-redux";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

const App = ()=>{
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedin)
  return (
    <div className="App">
      {isLoggedIn ? <Home/> : <Login/>}
    </div>
  );
}

export default App;