import React from "react"
import "./Product.css"



export default function Product() {
    return (
        <>
         <div className="product">
            <div className="product-info">
                <p></p>
                <p className="product-price">
                    <small></small>
                    <strong></strong>
                </p>
                <div className="product-rating">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <img src="" alt="" />
                <button>Add to Basket</button>
            </div>
         </div>
        </>
    )
}