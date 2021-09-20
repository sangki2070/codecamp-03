import { Wrapper, SliderItem } from "./LayoutNav.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutNavUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/home-landing.png" />
        </div>
        <div>
          <SliderItem src="/images/fint1.png" />
        </div>
        <div>
          <SliderItem src="/images/fint2.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
