import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem({ id, title, image, price, rating }) {
  const [{ user, basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basketItem">
      <div className="basketItem__Left">
        <img className="basketItem__image" src={image} />
      </div>
      <div className="basketItem__Right">
        <div className="basketItem__Title">{title}</div>
        <div className="basketItem__Price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="basketItem__Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
