import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, children }) => {
  //   const { cart } = props;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const item of cart) {
    quantity = quantity + item.quantity;
    total = total + item.price * item.quantity;
    shipping = shipping + item.shipping * item.quantity;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      {/* <p>Selected Items: {cart.length}</p> */}
      <p>Selected Items: {quantity}</p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping Charge: $ {shipping}</p>
      <p>Tax: $ {tax.toFixed(2)}</p>
      <h3>Grand Total: $ {grandTotal}</h3>
      {/* <button className="btnClear" onClick={clearCart}>
        Clear Cart
      </button> */}

      {children}
    </div>
  );
};

export default Cart;
