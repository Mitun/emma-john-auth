import React, { useEffect, useState } from "react";
import "./Shopping.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link, useLoaderData } from "react-router-dom";

const Shopping = () => {
  const { products, initialCart } = useLoaderData();
  // const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storCartData = getShoppingCart();
    const savedCart = [];
    for (const id in storCartData) {
      const addedProduct = products.find(
        (cartProduct) => cartProduct.id === id
      );
      if (addedProduct) {
        const quantity = storCartData[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
        console.log("mycart", savedCart);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleTotalCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shopping">
      <div className="productContainer">
        {products.map((product) => (
          <Product
            product={product}
            handleTotalCart={handleTotalCart}
            clearCart={clearCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cartContainer">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/orderreview">
            <button className="btnOrderReview">Order Reiew</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shopping;
