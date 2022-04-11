import { SortRounded } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useUserAuth } from "./context/UserAuthContext";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  const { user } = useUserAuth();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="banner"
        />
        <div>
          {user && <h2 className="checkout__title">Hello, {user.email}</h2>}
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {basket.map((i) => (
          <CheckoutProduct
            id={i.id}
            title={i.title}
            image={i.image}
            price={i.price}
            rating={i.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
