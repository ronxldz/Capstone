import React from "react";
import "./Product.css";

export default function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product-info">
        <div className="product-image">
          <img className="img" src={image} alt="" />
        </div>
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {/* You can render the rating here */}
        </div>
        <button className="button">Add to Basket</button>
      </div>
    </div>
  );
}
