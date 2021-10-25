import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const BodyVideo = styled(ReactPlayer)``;

export const Wrapper = styled.div`
  /* background-color: #f5f5f5; */
  width: 100%;
  height: 500px;
  /* height: 900px; */
  /* padding-top: 0px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const SliderItem = styled.img`
  height: 500px;
  width: 400px;
  margin: auto;
  padding-bottom: 20px;
`;

export const TradingChartWrapper = styled.div`
  padding: 15px;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  height: 100%;
  /* width: 1000px; */
  width: 100%;
  display: flex;
`;

export const TradingChartMiddleWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
