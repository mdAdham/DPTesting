import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Slice/authSlice'

const Navbar = ({openCart}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state)=>state.auth.user);
  const items = useSelector((state)=>state.cart.items);

  const cartCount = items.reduce((total, x)=>total+x.qty, 0);
  const handleLogout = ()=>{
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className='Navbar'>
        <Link to='/'className='Logo'>Ecom Shop</Link>
        <div className="navLink">
          <Link to='/'>Home</Link>
          <Link to='/mens'>Mens</Link>
          <Link to='/jewelllery'>Jewellery</Link>
          <Link to='/electronics'>Electronics</Link>
          <Link to='/womens'>Womens</Link>
        </div>
        <div className="navRight">
          <div className="placeHolder"></div>
          <span className="userEmail">{email}</span>
          <button className='cartBtn' onClick={openCart} aria-label={`Open cart,$`}>Cart {cartCount}</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar;