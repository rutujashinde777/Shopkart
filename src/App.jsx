import { useContext, useState } from 'react'
  import heroImg from './assets/hero.png'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import './App.css'
  import { Outlet, Route, Routes } from 'react-router-dom'
  import Navbar from './Component/Navbar'
  import Home from './pages/Home'
  import Product from './pages/Product'
  import Cart from './pages/Cart'
  import Login from './pages/Login'
  import Register from './pages/Register'
import Footer from './Component/Footer'
import Demo from './Demo'
import ThemeContext from './Context/ThemeContext'
import Payment from './pages/Payment'
import Success from './pages/Success'

  function App() {
    const {state}=useContext(ThemeContext)

    return (
      
      <>
      <div style={{
        backgroundColor: state.theme=='light'?" #fff ":" #333",
        color:state.theme=='light' ? '#000' : '#3be3e2',
        minHeight:'100vh'
        
      }}>

     
      <Navbar />
      <Outlet />
     
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/product' Component={Product} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/success' element={<Success/>} />


        <Route path='/footer' element={<Footer/>}/>
        <Route path='/demo' element={<Demo/>}/>

      
      </Routes> </div>
      </>
    )
  }

  export default App