import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  //console.log(props);
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <p className="name">{name}</p>
      <p className="price">Price: ${price}</p>
      <p className="manufacturer">Manufacturer: {seller}</p>
      <p className="rating">Rating: {ratings}</p>
      <div>
        <button
          className="button"
          onClick={() => props.handleTotalCart(props.product)}
        >
          <p className="addPara">Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
