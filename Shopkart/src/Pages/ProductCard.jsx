import React from 'react'
import { CartContext } from './CartContext.jsx'
import { useContext } from 'react'

function ProductCard({ title, image, price }) {
  const { dispatch } = useContext(CartContext);

  return (

    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h2>${price}</h2>
      
      <button
        onClick={() => 
dispatch({ 
  type: "ADD_TO_CART", 
  payload: { title, image, price },
 })
}
>
  Add to Cart
</button>
</div>
  
  );
}

export default ProductCard;