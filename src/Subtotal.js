import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> this order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/payment">
        <button className="proceed__button">
          Prceed to checkout
          </button>
      </Link>
    </div>
  );
};

export default Subtotal;
