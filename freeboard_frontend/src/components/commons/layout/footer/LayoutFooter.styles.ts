import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: rgb(18, 23, 34);
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
`;

export const Logo = styled.img`
  font-size: 60px;
  /* font-weight: bold; */
  font-family: "live";
  font-style: italic;
  cursor: pointer;
  width: 80px;
  height: 100px;
  /* padding-bottom: 120px; */
`;
export const LogoName = styled.div`
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-family: Trebuchet MS, roboto, ubuntu, sans-serif;
  font-size: 40px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const GoogleWrapper = styled.div`
  width: 202px;
  height: 61px;
  border-radius: 10px;
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  font-size: 20px;
  margin-right: 30px;
  color: #39c8ce;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const AppleWrapper = styled.div`
  width: 202px;
  height: 61px;
  border-radius: 10px;
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  font-size: 20px;
  margin-left: 30px;
  color: #39c8ce;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const WeatherWrapper = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid rgb(255, 255, 255);
  background-color: #1e222d;
  font-size: 20px;
  margin-left: 30px;
  padding: 15px;

  font-weight: bold;
`;

export const GoogleIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const AppleIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  /* width: 1200px; */
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const WeatherImageWrapper = styled.div`
  padding-left: 60px;
`;

export const WeatherItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Temperature = styled.div``;

export const WeatherState = styled.div``;

export const City = styled.div``;

export const WeatherHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

export const Wind = styled.img`
  width: 25px;
  height: 25px;
`;

export const Humidity = styled.img`
  width: 25px;
  height: 25px;
`;

export const Clouds = styled.img`
  width: 25px;
  height: 25px;
`;

export const WeatherFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  padding-top: 20px;
`;

export const WeaterFooterItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
`;

export const WeatherFooterImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 10px;
`;
