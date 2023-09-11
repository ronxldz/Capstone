import React from "react"
import "./Checkout.css"
import Subtotal from "./Subtotal"





export default function Checkout() {

    return (
        <>
         <div className="checkout">
            <div className="checkout-left">

            </div>
            <div>
                <h2 className="checkout-title">Your Shopping Basket</h2>
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>

         </div>
        </>
    )
    
}