import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '../Component/ProductCrad'  
function Product() {
  const[products,setProducts]=useState([])
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
    .then(res => res.json())
    .then( data => setProducts(data))
  }, [])

  const result=useMemo(()=>{
    return products.filter((item)=>item.price<200)
  }, [products])



  return (
    <div>
      <h3>Product page</h3>
      {
        result.map((item)=>
        <ProductCard key={item.id} image={item.image} title = {item.title} description={item.description}  price = {item.price}/>)
      }
    </div>
  )
}

export default Product
