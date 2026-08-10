import React from 'react'

function ProductCard({ title, price, image }) {
  return (
    <>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h2>${price}</h2>
    </>
  )
}

export default ProductCard