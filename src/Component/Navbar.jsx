import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import { CartContext } from '../Context/CartContext'

function Navbar() {
  const{state,dispatch}=useContext(ThemeContext)
  const{state:st}=useContext(CartContext)
  return (
    <>
    <nav style={{padding: '10px',  }}>
      <Link to ='/' style={{ margin: '10px', color: '#522660' }}>Home</Link>
      <Link to='/product' style={{ margin: '10px', color: '#522660' }}>Product</Link>
      <Link to='/cart' style={{ margin: '10px', color: '#522660' }}>Cart({st.cart.lenght})</Link>
      <Link to='/login' style={{ margin: '10px', color: '#522660' }}>Login</Link>
      <Link to='/register' style={{ margin: '10px', color: '#522660' }}>Register</Link>
      <Link to='/demo' style={{ margin: '10px', color: '#522660' }}>demo</Link>
      <button onClick={()=>dispatch({type:'Toggle_theme'})}>
        {state.theme=='light'? 'dark':'light'}
      </button>
    </nav>
    </>
  )
}

export default Navbar
