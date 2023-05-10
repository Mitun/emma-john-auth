import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ShortCart from "../ShortCart/ShortCart";
import "./OrderReview.css";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
  removeFromDb,
} from "../../utilities/fakedb";

const OrderReview = () => {
  const { products, initialCart } = useLoaderData();

  const [cart, setCart] = useState(initialCart);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const btnClick = (id) => {
    // console.log(id);
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const plus = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setCart(updatedCart);
    addToDb(updatedCart);
  };
  const minus = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1;
        return {
          ...product,
          quantity: newQuantity < 0 ? 0 : newQuantity,
        };
      }
      return product;
    });
    setCart(updatedCart);
    addToDb(updatedCart);
  };

  return (
    <div className="shopping">
      <div className="orderContainer">
        {cart.map((item) => (
          <ShortCart
            item={item}
            key={item.id}
            plus={plus}
            minus={minus}
            btnClick={btnClick}
          ></ShortCart>
        ))}
        {cart.length === 0 && (
          <h2>
            No Shopping Item Added. <Link to="/">SHOP HERE</Link>
          </h2>
        )}
      </div>
      <div className="cartOfContainer">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/shipment">
            <button>Proceed & Confirm</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
