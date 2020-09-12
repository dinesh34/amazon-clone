import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item to data layout
    console.log("this is the basket>>>", basket);
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
    <div className="product">
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
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <Zoom>
        <img className="product__image" src={image} />
      </Zoom>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
