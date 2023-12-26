// CartPage.js
import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity } = useCart();

  // Implement rendering of cart items and quantities here

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>Item: {item.name}</p>
          <p>Price per unit: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => incrementQuantity(item.id)}>Increase Quantity</button>
          <button onClick={() => decrementQuantity(item.id)}>Decrease Quantity</button>
        </div>
      ))}
      <p>Total Quantity: {/* Implement logic to calculate total quantity */}</p>
      <p>Total Amount: {/* Implement logic to calculate total amount */}</p>
    </div>
  );
};

export default CartPage;
