import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/1500x600_Hero-Tall_01_FT._CB662389308_.jpg"
                alt="slide1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Desktop_Tallhero_1500-X-600-BB-jan-rvised-NO-Cashback._CB411961897_.jpg"
                alt="slide2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Boat/Boat_Gw_1500x600._CB660810557_.jpg"
                alt="slide3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/CAT_ATF/2._CB411390334_.jpg"
                alt="slide4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/catlevel/D20458164_IN_HETV_Category_level_GW_PC_Tollhero_1500x600_en_1._CB660812078_.jpg"
                alt="slide5"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Alienware AW13R3-7420SLV-PUS 13.3 Gaming Laptop (7th Generation Intel Core i7, 16GB RAM, 512 SSD, Silver) VR Ready with NVIDIA GTX 1060"
            price={140000}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2B76Hn%2BpJL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="12321351"
            title="New Apple iPhone 12 Pro Max (128GB, Graphite) "
            price={132200}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="12321361"
            title="SAMSUNG 75-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q60AAFXZA, 2021 Model)"
            price={70000}
            rating={4}
            image="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled-4k-tvs/q60a-2021/gallery/02222021/QN65Q60AAFXZA_001_Front1_Titan-Gray-Gallery-1600x1200.jpg?$product-details-jpg$"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321381"
            title="Casio Edifice Analog Blue Dial Men's Watch - EFR-552GL-2AVUDF (EX358)"
            price={9596}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71girhyQcJL._UL1100_.jpg"
          />
          <Product
            id="12321371"
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
            price={2999}
            image="https://images-eu.ssl-images-amazon.com/images/I/41tEQogY3qL._SX300_SY300_QL70_ML2_.jpg"
            rating={5}
          />
          <Product
            id="12321391"
            title="boAt Rockerz 400 On- Ear Headphones with 8 Hours Battery, 40mm Drivers, Bluetooth V5.0, Foldable Cups and Voice Assistant(Carbon Black)"
            price={999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61stQYWQO4L._SY355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321441"
            title="GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilization, Dual Screen, HyperSmooth 3.0 and Time Warp 3.0"
            price={36999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61Iyd3w%2BbKL._SL1500_.jpg"
          />
          <Product
            id="12321541"
            title="Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps"
            price={19300}
            rating={4}
            image="https://m.media-amazon.com/images/I/61uej9efKYL._AC_SS450_.jpg"
          />
          <Product
            id="12321641"
            title="Eureka Forbes Aquasure From Aquaguard Amaze Ro+Uv+Mtds 7L Water Purifier, 1 Pc"
            price={9499}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51XK4ldf9sL._SX425_.jpg"
          />
        </div>
        <div class="home__row">
          <Product
            id="12321741"
            title="Mamaearth Anti Hair Fall Spa Range with Onion Hair Oil + Onion Shampoo + Onion Conditioner for Hair Fall Control"
            price={879}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61mNnwQnmbL._SL1200_.jpg"
          />
          <Product
            id="12321841"
            title="Babolat Pure Aero Plus Tennis Racquet"
            price={16499}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/514gkVCzZDL._SL1001_.jpg"
          />
          <Product
            id="12321941"
            title="Villain Perfume For Men 100 Ml - Eau De Parfum - Premium Long Lasting Fragrance Spray - Woody & Spicy"
            price={569}
            rating={5}
            image="https://m.media-amazon.com/images/I/71N+33GFefL._AC_SS450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
