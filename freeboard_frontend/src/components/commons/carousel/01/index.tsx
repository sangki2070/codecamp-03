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

  .slick-dots {
    right: 10px;
    left: 1px;
    .slick-active {
      button::before {
        color: #881798;
      }
    }
    button::before {
      color: #881798;
    }
  }
  /* .slick-thumb {
    width: 40px;
    height: 40px;
    background-color: gray;
  } */

  .slick-prev:before,
  .slick-next:before {
    color: #881798;
    font-size: 40px;
  }
`;

export default function Carousel01(props: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <>
      <MySlider {...settings}>
        {props.data?.fetchUseditem.images
          ?.filter((el: any) => el !== "")
          .map((el: any) => (
            <div key={el}>
              <SliderItem src={`https://storage.googleapis.com/${el}`} />
            </div>
          ))}
      </MySlider>
    </>
  );
}
