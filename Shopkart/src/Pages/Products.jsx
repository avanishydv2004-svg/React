import React from 'react'
import ProductCard from '../Pages/ProductCard'
import {useState } from 'react'
import{ useEffect } from 'react'

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
    .then((res) => res.json())
    .then(data => {
      setProducts(data);
    })
  }, []);
  
  return (
    <div>
      {
        products.map(item => (
          <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          />
        ))}
      
    </div>
  )
}

export default Products