import React, { forwardRef } from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";
import BasketItem from "./BasketItem.js";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ user, basket }, dispatch] = useStateValue();

  //   const CheckoutItem = forwardRef((props, ref) => (
  //     <BasketItem
  //       ref={ref}
  //       id={props.id}
  //       title={props.title}
  //       price={props.price}
  //       image={props.image}
  //       rating={props.rating}
  //     />
  //   ));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* <FlipMove> */}
          {basket.map((item) => {
            return (
              <BasketItem
                key={basket.indexOf(item)}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
              // <CheckoutItem key={basket.indexOf(item)} {...item} />
            );
          })}
          {/* </FlipMove> */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
