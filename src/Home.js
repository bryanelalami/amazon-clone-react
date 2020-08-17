import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12341234"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.96}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/41+e3refnZL._SY344_BO1,204,203,200_.jpg"
        />
        <Product
          id="25639372"
          title="GaryVee: Crushing It !"
          price={18.17}
          rating={4}
          image="https://m.media-amazon.com/images/I/51-bm0sCDHL._SY346_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="27631092"
          title="Sony PMW-150"
          price={1250.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41J4ijatnyL._AC_.jpg"
        />
        <Product
          id="89171982"
          title="Kitchen Organizer 2.0"
          price={19.85}
          rating={5}
          image="https://m.media-amazon.com/images/I/61qx7DiilrL._SR500,500_.jpg"
        />
        <Product
          id="6789102'"
          title="EWatch"
          price={79.90}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/712wbCJElYL._UX569_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="89100289"
          title="Iphone 11"
          price={789.90}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX466_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
