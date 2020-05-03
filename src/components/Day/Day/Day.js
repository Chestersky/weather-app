import React from "react";
import "./Day.css";
import "../../../weather-icons/css/weather-icons.css";

const day = (props) => {
  const icons = {
    "01d": "wi-day-sunny",
    "02d": "wi-day-cloudy",
    "03d": "wi-cloud",
    "04d": "wi-cloudy",
    "09d": "wi-day-showers",
    "10d": "wi-day-rain",
    "11d": "wi-day-thunderstorm",
    "13d": "wi-day-snow",
    "50d": "wi-day-fog",
    "01n": "wi-night-clear",
    "02n": "wi-night-cloudy",
    "03n": "wi-cloud",
    "04n": "wi-cloudy",
    "09n": "wi-night-showers",
    "10n": "wi-night-rain",
    "11n": "wi-night-thunderstorm",
    "13n": "wi-night-snow",
    "50n": "wi-night-fog",
  };

  return (
    <article className="Post">
      <div className="LocationInfo">
        <h1>{props.name}</h1> <span>{props.date}</span>
      </div>
      <div className="WeatherDetails">
        <div className="Temp">
          <i className={"wi " + icons[props.icon]} />
          {Math.round(props.temp)}
          <i className={"wi wi-celsius"} />
          <div className="Description">{props.description}</div>
        </div>
        <div className="Weather-description-1">
          <div>
            <i className="wi wi-humidity" />
            <strong>wilgotność</strong>: {props.humidity}%
          </div>
          <div>
            <i className="wi wi-barometer" />
            <strong>ciśnienie:</strong> {props.pressure} hPa
          </div>
          <div>
            <i className="wi wi-strong-wind" />
            <strong>prędkość wiatru:</strong> {props.windSpeed} m/s
          </div>
          <div>
            <i className="wi wi-cloud" />
            <strong>zachmurzenie:</strong> {props.clouds}%
          </div>
        </div>
      </div>
    </article>
  );
};
export default day;
