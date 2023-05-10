import React from "react";
import "./ShortCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

//ash} from "@fortawesome/fontawesome-svg-core/import.macro";

const ShortCart = ({ item, btnClick, plus, minus }) => {
  const { name, price, shipping, quantity, img, id } = item;
  //console.group(item);
  return (
    <div className="mainContainer">
      <div>
        <img src={img} alt=""></img>
      </div>
      <div className="insideCOntainer">
        <div className="content">
          <p>Name: {name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping Charge: ${shipping}</small>
          </p>
          <p className="content1">
            <small>Quantity: {quantity}</small>
            <div className="content2">
              <button className="btn1" onClick={() => plus(id)}>
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
              <button className="btn2" onClick={() => minus(id)}>
                <FontAwesomeIcon icon={faCircleMinus} />
              </button>
            </div>
          </p>
        </div>
        <div className="btn">
          <button onClick={() => btnClick(id)} className="btn-back">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortCart;
