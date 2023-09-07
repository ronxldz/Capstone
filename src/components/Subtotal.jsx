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
              Subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Assuming you have a function getBasketTotal that calculates the total
        displayType={"text"} // Fix: use displayType={"text"} instead of displayType{"text"}
        thousandSeparator={true} // Fix: Correct prop name
        prefix={"$"}
      />
    </div>
  );
}
