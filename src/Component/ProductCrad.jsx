import React, { memo, useContext } from 'react'
import './ProductCard.css'
import { CartContext } from '../Context/CartContext'

function ProductCard({image ,title ,price,description}) {

  const{dispatch}=useContext(CartContext);
  return (
    <>
    <div className="card">
      <img src={image} height='150px' width='100px'/>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h4>${price}</h4>
      <h3>{title}</h3>
      <button onClick={()=>dispatch({type:"Add_To_Cart", payload:{image,title,price}})}>
        ADD To CART
        </button> 
    </div> 
    </>
  )
}

export default memo(ProductCard)
