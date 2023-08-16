import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouseldata } from "./MainCaroselData";

const MainCarosel = () => {
  //this got mapped with maincarouseldata map will return array
  const items = mainCarouseldata.map((item) => (
    <img
      //cursor-pointer came from tailwind
      className="cursor-pointer -z-10"
      role="presentation"
      src={item.image}
      alt=" "
    />
  ));
  //carousal component
  return (
    <AliceCarousel
      items={items}
      //buttons got disabled her
      disableButtonsControls
      //this make carousal autoplay
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};
export default MainCarosel;
