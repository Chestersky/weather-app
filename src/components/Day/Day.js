import React from "react";
import "./Day.css";

const day = props => {
  let icon = (
    <img
      src={"http://openweathermap.org/img/w/" + props.icon + ".png"}
      alt="cos"
    />
  );

  return (
    <article className="Post">
      <div className="LocationName">{props.name}</div>
      <div>{props.date}</div>
      <div className="WeatherDetails">
        <div className="Temp">
          {icon}
          {Math.round(props.temp)}&#176;C
          <div className="Description">{props.description}</div>
        </div>
        <div className="Weather-description-1">
          <div>
            <strong>wilgotność</strong>: {props.humidity}%
          </div>
          <div>
            <strong>ciśnienie:</strong> {props.pressure} hPa
          </div>
          <div>
            <strong>prędkość wiatru:</strong> {props.windSpeed} m/s
          </div>
        </div>
        <div className="Weather-description-2">
          <div>
            <strong>zachmurzenie:</strong> {props.clouds}%
          </div>
          <div>
            <strong>deszcz:</strong> {props.rain} mm
          </div>
        </div>
      </div>
    </article>
  );
};
export default day;
