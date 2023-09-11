import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

export default function Subtotal({ basket }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal 0 items:
              <strong>0</strong>
            </p>
            <small className="subtotal-gift">
              <input className="input" type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Assuming you have a function getBasketTotal that calculates the total
        displayType={"text"} // Fix: use displayType={"text"} instead of displayType{"text"}
        thousandSeparator={true} // Fix: Correct prop name
        prefix={"$"}
      />
      
      <button className="button">Proceed to Checkout</button>
    </div>
  );
}
