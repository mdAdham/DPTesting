import { useEffect, useState } from "react";
import Card from "./Card";

import './App.css'

const App = ()=>{
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    console.log("The count value is: ", count);

    const fetchData = async()=>{
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        if (!res){
          throw Error("Unable to connect the API");
        }
        else {
          const prod = await res.json();
          setProducts(prod);
        }
      }
      catch(error) {
        alert(error);
      }
    }
    fetchData();
  }, [count]); // This array contains variable, it 
        // detect the variable changes
        // and execute this function

  // TASK Display the Products as Card
  console.log(products);
  

  const handleAdd = ()=>{
    setCount((prev)=>++prev);
  };


  return (
    <div className="App">
      <button onClick={handleAdd}>Click {count}</button>

      <div className="card-container">
        {products.map((item)=><Card {...item}/>)}
      </div>
    </div>
  );
}

export default App;