import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";


// This is the component that we want to test with snapshot testing 
const Residenceis = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Poplular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residenceis;

// This is a component to show the buttons on the slider
const SliderButtons = () => {

  const swiper = useSwiper();

  return (
    <div className="flexCenter r-buttons">
      <button onClick={ () => swiper.slidePrev()}>&lt;</button>
      <button onClick={ () => swiper.slideNext()}>&gt;</button>
    </div>
  )
}


