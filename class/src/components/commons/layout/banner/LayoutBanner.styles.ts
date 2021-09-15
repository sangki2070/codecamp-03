import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  background-color: lightpink;
  height: 250px;
`;

export const SlideTitle = styled.div`
  padding: 30px 0px 50px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
`;

export const CardImg = styled.img`
  width: 70%;
  height: 100px;
`;

export const MySlider = styled(Slider)`
  .slick-list {
    width: 1600px;
    margin: 0 auto;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: -10px;
    margin-top: 200px;
  }

  .slick-track {
    /* overflow-x: hidden; */
  }
`;
