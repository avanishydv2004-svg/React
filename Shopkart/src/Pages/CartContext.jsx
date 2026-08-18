import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function CartReducer  (state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter(
          (item,index) => index !== action.payload
        ),
      };

      case "CLEAR_CART":
        return {
          cart: []
        };
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };