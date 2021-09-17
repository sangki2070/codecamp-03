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
          <SliderItem src="/images/visual2.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/visual3.jpg" />
        </div>
        <div>
          <SliderItem src="/images/visual5.jpeg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
