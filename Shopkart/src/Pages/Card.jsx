import React from 'react'
import { CartContext } from './CartContext.jsx'
import { useContext } from 'react'

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {state.cart.length === 0 ? (
        <p>No item in cart</p>
      ) : (
        state.cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button
              onClick={() =>
                dispatch({ 
                  type: "REMOVE_FROM_CART", 
                  payload: index, 
                })
              }
            >
              Remove
            </button>
            </div>
        ))
      )}
      </div>

  );
}

export default Cart;