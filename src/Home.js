import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="10203040"
            title="The lean startup: How constant Innovation creates radically Successfull Businesses - PaperBack"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="11213141"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://static.wixstatic.com/media/84aee5_be866ff69b194d46b909203d6e594347~mv2.png/v1/fill/w_480,h_488,al_c,q_90,usm_0.66_1.00_0.01/84aee5_be866ff69b194d46b909203d6e594347~mv2.webp"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="21323456"
            title="Fitbit Charge 3 - Fitness tracker"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71YGrhhoqUL._AC_UL1500_.jpg"
            rating={3}
          />
          <Product
            id="48759031"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal fabric"
            price={239.0}
            image="data:image/jpeg;base64,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"
            rating={5}
          />
          <Product
            id="40895394"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/815ztYEEwYL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="21323456"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1049.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
