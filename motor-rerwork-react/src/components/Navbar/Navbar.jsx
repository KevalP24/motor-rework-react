import React from 'react'
import logo from  "../../assets/logo.png";
import "../Navbar/Navbar.css";


export default function Navbar() {
  return (
    <>
    <header className="header">
  <div className="container">
    <a href="" className="logo">
      <img src={logo} width="128" height="63" alt="motor rework home" />
    </a>

    <nav className="navbar" data-navbar>
      <ul className="navbar-list">
        {/* <li>
          <a href="#" className="navbar-link">Home</a>
        </li> */}
        <li>
          <a href="#" className="navbar-link">New Car</a>
        </li>
        <li>
          <a href="oldcar.html" className="navbar-link">Entire Car</a>
        </li>
        <li>
          <a href="#" className="navbar-link">Car Customization</a>
        </li>
        <li>
          <a href="#" className="navbar-link">Spare Parts</a>
        </li>
        <li>
          <a href="#" className="navbar-link">Car Clips</a>
        </li>
      </ul>
    </nav>

    <div className="user-icon btn btn-primary">
      <i className="ri-user-6-line"></i>
      <div className="dropdown-menu">
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </div>
    </div>

    <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
      <span className="nav-toggle-icon icon-1"></span>
      <span className="nav-toggle-icon icon-2"></span>
      <span className="nav-toggle-icon icon-3"></span>
    </button>
  </div>
</header>

    </>
  )
}
