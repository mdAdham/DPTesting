import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
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
        <div className="navLink d-flex">
          <NavLink to='/' exact="true">Home</NavLink>
          <NavLink to='/category/mens'>Mens</NavLink>
          <NavLink to='/category/jewelery'>Jewelery</NavLink>
          <NavLink to='/category/electronics'>Electronics</NavLink>
          <NavLink to='/category/womens'>Womens</NavLink>
          <Link to='/checkout'></Link>
        </div>
        <div className="navRight">
          <div className="placeHolder">
            <i class="fa-solid fa-bars"></i>
          </div>
          <span className="userEmail">{email}</span>
          <button className='cartBtn' onClick={openCart} aria-label={`Open cart,$`}>
            Cart <span className="cartCount">
              {cartCount}
              </span>
          </button>
          <button onClick={handleLogout} className="LogoutBtn">
            Logout
          </button>
        </div>
    </div>
  )
}

export default Navbar;