import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'

function Layout() {
  const { state } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: state.theme === "light" ? "#f8f9fa" : "#121212",
      color: state.theme === "light" ? "#000" : "#fff",
      minHeight: "100vh"
    }}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout