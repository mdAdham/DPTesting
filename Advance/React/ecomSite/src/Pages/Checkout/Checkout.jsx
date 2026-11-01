import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../Slice/cartSlice'

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector((state)=>state.cart.items)
  const email = useSelector((state)=>state.auth.user)

  const [customer,setCustomer]= useState(
    {
      name:"",
      email:email||"",
      mobile:"",
      address:""
    }
  )
  const total = items.reduce((sum,item)=>sum+item.price*item.qty,0)
  const handleChange = (e)=>{
    setCustomer({
      ...customer,[e.target.name]:e.target.value
    })
  }
  const handleOrder = (e)=>{
    e.preventDefault()
    if(items.length===0){
      return;
    }
    alert("Order Placed Sucessfully")
    dispatch(clearCart())
    navigate("/")
  }
  return (
    <div className='checkoutPage'>
      <h1>Checkout</h1>
      <div className='checkoutLayout'>
        <form className='checkoutForm' onSubmit={handleOrder}>
          <h2>Customer Details</h2>
          <label>userName:</label>
          <input type='text' name='name' value={customer.name} onChange={handleChange} required></input>
          <label>Email:</label>
          <input type='email' name='email' value={customer.email} onChange={handleChange} required></input>
          <label>Mobile:</label>
          <input type='tel' name='mobile' value={customer.mobile} onChange={handleChange} pattern='[0-9]{10}' required></input>
          <label>Delivery Address</label>
          <textarea name='address' value={customer.address} onChange={handleChange} required rows='5'></textarea>
          <button type='submit' className='primaryBtn' disabled={items.length==0}>Place Order</button>
        </form>
        <div className='orderSummary'>
          <h2>Order Summary</h2>
          {items.length===0 && (<p>Cart is Empty</p>)}
          {items.map((item)=>(
            <div className='summaryItem'>
              <span>{item.title} - {item.qty}</span>
              <strong>${(item.price*item.qty).toFixed(2)}</strong>
            </div>
          ))}
          <div className='summaryTotal'>
            <h3>Total</h3>
            <h3>${total.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;