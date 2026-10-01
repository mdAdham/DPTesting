import { useReducer, useState } from "react";

const initialState = {
  cart: [],
  total: 0
}

const reducer = (state, action)=>{
  switch(action.type)
  {
    case "AddToCart":
      return {
        ...state,
        cart:[...state.cart, action.products],
        total:state.total + action.products.prodPrice
      }
    case "RemoveFromCart":
      return {
        ...state,
        cart: state.cart.filter(item=>item.id !== action.id),
        total: state.total - state.cart.find(item=>item.id === action.id).prodPrice
      }
    case "ClearCart":
      return {
        ...state,
        cart:[],
        total: 0
      }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const products = {
    id: 1,
    prodName: "Samsung",
    prodPrice: 75000
  }

  return (
    <div className="App">
      <h1>Shop Cart</h1>
      <button onClick={()=>{dispatch({type: "AddToCart", products:products})}}>
        Add Samsung
      </button>
      <h2>Total: {state.total}</h2>
      <h3>Cart Item: {state.cart.length}</h3>
      <button onClick={()=>{dispatch({type: "RemoveFromCart", id:1})}}>
        Remove Samsung
      </button>
      <button onClick={()=>{dispatch({type: "ClearCart"})}}>
        Clear Cart
      </button>
    </div>
  );
}

export default App;