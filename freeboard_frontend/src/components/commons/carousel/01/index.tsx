import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderItem = styled.img`
  height: 300px;
  width: 300px;
`;

const MySlider = styled(Slider)`
  .slick-list {
    width: 400px;
    margin: auto;
  }

  .slick-slide img {
    margin: auto;
  }
  padding: 44px;

  .slick-prev:before,
  .slick-next:before {
    color: #881798;
    font-size: 40px;
  }
`;

export default function Carousel01() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <>
      <MySlider {...settings}>
        <div>
          <SliderItem src={"/images/fint1.png"} />
        </div>
        <div>
          <SliderItem src={"/images/noimage3.svg"} />
        </div>
      </MySlider>
    </>
  );
}
