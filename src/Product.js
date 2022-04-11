import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue();
  // dispatch the item into the data layer
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product" key={Math.random()}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button className="product__button" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
