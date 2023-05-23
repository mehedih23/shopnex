import React from 'react';
import './Navbar.css'
import logo from '../../logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="logo" />
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/">Shop</a></li>
      <li><a href="/">Order</a></li>
      <li><a href="/">Manage Inventory</a></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;