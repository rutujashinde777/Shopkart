import React, { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

function Payment() {
    const{state,dispatch}=useContext(CartContext);
        const nav=useNavigate();


    const total=state.cart.reduce((sum,item)=>sum+item.price,0)
    function handlerFunction(){
        dispatch({type:"Clear_Cart"})
        nav('/success')
    }
    
  return (
    <>
      <h1>Payment Page</h1>
      <h2>Total Amount: {total}</h2>
       Card Number:
      <input type='text' placeholder='Enter Card Number'/>
      Exp Date:
      <input type='text' placeholder='Enter Expiry date'/>
      CVV:
      <input type='text' placeholder='Enter CVV'/>

      <button onClick={handlerFunction}>Pay Now</button>
      </>
  )
}
export default Payment