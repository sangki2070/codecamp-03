import { Wrapper, SliderItem, BodyVideo } from "./LayoutNav.styles";
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
      {/* <Slider {...settings}>
        <div> */}
      <BodyVideo
        url={
          "https://kr.tradingview.com/static/bundles/1b46d7c30e364bde36e56bf139724b23.mp4"
        }
        width={2000}
        height={800}
        muted={true}
        playing={true}
        loop={true}
      ></BodyVideo>
      {/* </div> */}
      {/* <div>
          <SliderItem src="/images/fint1.png" />
        </div>
        <div>
          <SliderItem src="/images/fint2.png" />
        </div> */}
      {/* </Slider> */}
    </Wrapper>
  );
}
