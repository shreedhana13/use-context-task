// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY':
      // Implement logic to increment quantity
      return state;
    case 'DECREMENT_QUANTITY':
      // Implement logic to decrement quantity
      return state;
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, /* initial state here */);

  const incrementQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { itemId } });
  };

  const decrementQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { itemId } });
  };

  return (
    <CartContext.Provider value={{ cart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
