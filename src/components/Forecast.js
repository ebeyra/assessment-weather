import React from "react";
import axios from "axios";

const Forecast = () => {
  const [weatherData, setWeatherData] = React.useState({});

  // Initial axios call for weather data

  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=25.761681&lon=-80.191788&exclude=minutely,hourly,alerts&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((responseFromApi) => {
        setWeatherData(responseFromApi);
      });
  }, []);

  // Initializing daily unix timestamps into an array for referencing in return

  let timestamps = [
    weatherData?.data?.daily[0]?.dt,
    weatherData?.data?.daily[1]?.dt,
    weatherData?.data?.daily[2]?.dt,
    weatherData?.data?.daily[3]?.dt,
    weatherData?.data?.daily[4]?.dt,
  ];

  // Function for extracting day of the week from timestamps

  const weekDay = (dateFromApi) => {
    return new Date(dateFromApi * 1000).toString().slice(0, 3);
  };

  // Initializing daily icons

  let icons = [
    `http://openweathermap.org/img/wn/${weatherData?.data?.daily[0]?.weather[0]?.icon}@2x.png`,
    `http://openweathermap.org/img/wn/${weatherData?.data?.daily[1]?.weather[0]?.icon}@2x.png`,
    `http://openweathermap.org/img/wn/${weatherData?.data?.daily[2]?.weather[0]?.icon}@2x.png`,
    `http://openweathermap.org/img/wn/${weatherData?.data?.daily[3]?.weather[0]?.icon}@2x.png`,
    `http://openweathermap.org/img/wn/${weatherData?.data?.daily[4]?.weather[0]?.icon}@2x.png`,
  ];

  // Initializing Hi and Low temperatures

  let hiTemp = [
    Math.floor(weatherData?.data?.daily[0]?.temp?.max),
    Math.floor(weatherData?.data?.daily[1]?.temp?.max),
    Math.floor(weatherData?.data?.daily[2]?.temp?.max),
    Math.floor(weatherData?.data?.daily[3]?.temp?.max),
    Math.floor(weatherData?.data?.daily[4]?.temp?.max),
  ];

  let lowTemp = [
    Math.floor(weatherData?.data?.daily[0]?.temp.min),
    Math.floor(weatherData?.data?.daily[1]?.temp.min),
    Math.floor(weatherData?.data?.daily[2]?.temp.min),
    Math.floor(weatherData?.data?.daily[3]?.temp.min),
    Math.floor(weatherData?.data?.daily[4]?.temp.min),
  ];

  // Page render content

  return (
    <div className="fullscreen">
      <div className="weather-box">
        <div className="daily-weather" style={{ backgroundColor: "lightgrey" }}>
          <p className="mute-font day-space">{weekDay(timestamps[0])}</p>
          <br />
          <img src={icons[0]} alt="weather icon" />
          <br />
          <div className="temps">
            <p>
              <b>{hiTemp[0] + "°"}</b>
            </p>
            <p className="mute-font">{lowTemp[0] + "°"}</p>
          </div>
        </div>
        <div className="daily-weather">
          <p className="mute-font day-space">{weekDay(timestamps[1])}</p>
          <br />
          <img src={icons[1]} alt="weather icon" />
          <br />
          <div className="temps">
            <p>
              <b>{hiTemp[1] + "°"}</b>
            </p>
            <p className="mute-font">{lowTemp[1] + "°"}</p>
          </div>
        </div>
        <div className="daily-weather">
          <p className="mute-font day-space">{weekDay(timestamps[2])}</p>
          <br />
          <img src={icons[2]} alt="weather icon" />
          <br />
          <div className="temps">
            <p>
              <b>{hiTemp[2] + "°"}</b>
            </p>
            <p className="mute-font">{lowTemp[2] + "°"}</p>
          </div>
        </div>
        <div className="daily-weather">
          <p className="mute-font day-space">{weekDay(timestamps[3])}</p>
          <br />
          <img src={icons[3]} alt="weather icon" />
          <br />
          <div className="temps">
            <p>
              <b>{hiTemp[3] + "°"}</b>
            </p>
            <p className="mute-font">{lowTemp[3] + "°"}</p>
          </div>
        </div>
        <div className="daily-weather">
          <p className="mute-font day-space">{weekDay(timestamps[4])}</p>
          <br />
          <img src={icons[4]} alt="weather icon" />
          <br />
          <div className="temps">
            <p>
              <b>{hiTemp[4] + "°"}</b>
            </p>
            <p className="mute-font">{lowTemp[4] + "°"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
