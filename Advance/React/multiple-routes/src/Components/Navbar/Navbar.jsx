import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            {/* <Link to="/">All Products</Link>
            <Link to="/mens">Mens</Link>
            <Link to="/jewellery">Jewellery</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/women">Women</Link> */}

            <Link to="/">All Products</Link>
            <Link to="/beauty">Beauty</Link>
            <Link to="/fragrances">Fragrances</Link>
            <Link to="/furniture">Furniture</Link>
            <Link to="/groceries">Groceries</Link>
        </div>
    )
}

export default Navbar;