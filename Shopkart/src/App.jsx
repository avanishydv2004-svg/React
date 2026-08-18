import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import router from './Pages/Router'
import { RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Login from './Pages/Login'
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './Pages/CartContext'

function App() {

  return (
    <>
    <ThemeProvider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
    </>
  )
}

export default App





















{/* <Counter /> 1 */}

{/* <Counter name="Amit" age={25} course="Computer"/>
<Counter name="Rohit"/>
<Counter name="Saurabh"/> */}2


{/* <Counter name="Amit" age={25} course="cjkdvb"/> */}3