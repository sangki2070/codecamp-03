import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderItem = styled.img``;

export default function Carousel01() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        <SliderItem src="/images/fint1.png" />

        <SliderItem src="/images/fint2.png" />
      </Slider>
    </>
  );
}
