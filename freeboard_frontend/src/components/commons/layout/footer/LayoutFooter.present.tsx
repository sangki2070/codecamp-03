import {
  AppleIcon,
  AppleWrapper,
  GoogleIcon,
  GoogleWrapper,
  Wrapper,
  WeatherWrapper,
  ButtonWrapper,
  WeatherImageWrapper,
  WeatherItemWrapper,
  Temperature,
  WeatherState,
  City,
  WeatherHeadWrapper,
  WeatherFooterWrapper,
  WeaterFooterItemWrapper,
  WeatherFooterImageWrapper,
  Logo,
  LogoName,
  LogoWrapper,
} from "./LayoutFooter.styles";

import { useEffect, useState } from "react";
import {
  faSun,
  faCloudSun,
  faCloud,
  faCloudMeatball,
  faCloudSunRain,
  faCloudShowersHeavy,
  faPooStorm,
  faSnowflake,
  faSmog,
  faWind,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

export default function LayoutFooterUI() {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [city, setCity] = useState("");
  const [clouds, setClouds] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState(0);

  const weatherImage: any = {
    "01": faSun,
    "02": faCloudSun,
    "03": faCloud,
    "04": faCloudMeatball,
    "09": faCloudSunRain,
    10: faCloudShowersHeavy,
    11: faPooStorm,
    13: faSnowflake,
    50: faSmog,
  };

  useEffect(() => {
    async function getWeather() {
      const cityweather: any = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=afe45ae13f1cfa7be8030331de88525c"
      );
      setWeather(cityweather.data.weather[0].main);
      setTemp(Math.floor(cityweather.data.main.temp));
      setHumidity(cityweather.data.main.humidity);
      setWind(cityweather.data.wind.speed);
      setCity(cityweather.data.name);
      setClouds(cityweather.data.clouds.all);
      setWeatherIcon(cityweather.data.weather[0].icon.substr(0, 2));
      console.log(cityweather);
      console.log(weatherIcon);
    }
    getWeather();
  }, []);

  return (
    <Wrapper>
      {/* <InnerWrapper> */}
      <ButtonWrapper>
        <GoogleWrapper>
          <GoogleIcon src="/images/googleplay.png"></GoogleIcon>
          <div>Google Play</div>
        </GoogleWrapper>
        <AppleWrapper>
          <AppleIcon src="/images/appstore.svg"></AppleIcon>
          <div>App Store</div>
        </AppleWrapper>
      </ButtonWrapper>
      <LogoWrapper>
        <Logo src={"/images/tvlogo1.jpeg"}></Logo>
        <LogoName>TradingZone</LogoName>
      </LogoWrapper>

      <WeatherWrapper>
        <WeatherHeadWrapper>
          <WeatherImageWrapper>
            <FontAwesomeIcon
              icon={weatherImage[weatherIcon]}
              size="5x"
              style={{ color: "white" }}
            ></FontAwesomeIcon>
          </WeatherImageWrapper>
          <WeatherItemWrapper>
            <Temperature style={{ color: "white" }}>
              {temp - 273} &#8451;
            </Temperature>
            <WeatherState style={{ color: "white" }}>{weather}</WeatherState>
            <City style={{ color: "white" }}>{city}</City>
          </WeatherItemWrapper>
        </WeatherHeadWrapper>
        <WeatherFooterWrapper>
          <WeatherFooterImageWrapper>
            <FontAwesomeIcon
              icon={faWind}
              style={{ color: "white" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faCloud}
              style={{ color: "white" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faTint}
              style={{ color: "white" }}
            ></FontAwesomeIcon>
          </WeatherFooterImageWrapper>
          <WeaterFooterItemWrapper>
            <div>{wind}</div>
            <div>{humidity}</div>
            <div>{clouds} %</div>
          </WeaterFooterItemWrapper>
        </WeatherFooterWrapper>
      </WeatherWrapper>
      {/* </InnerWrapper> */}
    </Wrapper>
  );
}
