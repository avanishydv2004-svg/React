import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {ThemeContext } from '../context/ThemeContext.jsx'

function Navbar() {
  const { state, dispatch } = useContext(ThemeContext);



  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link  active " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/card">Cart</Link>
        </li>
      </ul>
      
    </div>
  </div>
  <button className="theme-btn" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
{state.theme === "light" ? "Dark" : "Light"}
</button>
</nav>
    </>
  )
}

export default Navbar