import axios from "axios";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OpenapiWithUseEffectPage() {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [city, setCity] = useState("");
  const [clouds, setClouds] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState(0);

  let weatherImage = {
    "01": faSun,
    "02": faCloudSun,
    "03": faCloud,
    "04": faCloudMeatball,
    "09": faCloudSunRain,
    "10": faCloudShowersHeavy,
    "11": faPooStorm,
    "13": faSnowflake,
    "50": faSmog,
  };

  useEffect(() => {
    async function getWeather() {
      const cityweather = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=afe45ae13f1cfa7be8030331de88525c"
      );
      setWeather(cityweather.data.weather[0].main);
      setTemp(Math.floor(cityweather.data.main.temp));
      setHumidity(cityweather.data.main.humidity);
      setWind(cityweather.data.wind.speed);
      setCity(cityweather.data.name);
      setClouds(cityweather.data.clouds.all + "%");
      setWeatherIcon(cityweather.data.weather[0].icon.substr(0, 2));
      console.log(cityweather);
    }
    getWeather();
  }, []);

  return (
    <>
      <div>오픈API</div>
      <div>날씨 : {weather}</div>
      <div>현재 온도: {temp - 273}</div>
      <div>현재 습도 : {humidity}</div>
      <div>바람 : {wind}</div>
      <div>도시 이름 : {city}</div>
      <div>구름 : {clouds}</div>
      {/* <div>{weatherIcon}</div> */}
      <FontAwesomeIcon icon={weatherImage[weatherIcon]}></FontAwesomeIcon>
    </>
  );
}

// afe45ae13f1cfa7be8030331de88525c

// http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=afe45ae13f1cfa7be8030331de88525c

// faCloudSun,faCloud,faCloudMeatball,faCloudSunRain,faCloudShowersHeavy,faPooStorm,faSnowflake,faSmog

//   {/* <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} /> */}
//   {/* <div>{weatherIconImage.weatherIcon}</div>
//   `/boards/${router.query.BoardsDetailPage}` */}
