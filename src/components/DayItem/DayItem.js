import React from "react";
import moment from "moment";
import "moment/locale/pl";
import "./DayItem.css";

const dayitem = (props) => {
  return (
    <div className="column">
      <h4>{moment(props.data.Date).locale("pl").format("dddd")}</h4>
      <div className="icon">
        <img
          alt="cos"
          src={
            "https://openweathermap.org/img/wn/" +
            props.icon[props.data.Day.Icon]
          }
        />
        <p className="lead">{props.data.Day.IconPhrase}</p>
      </div>
      <div className="temp">
        <p>{props.data.Temperature.Maximum.Value}&#8451;</p>
        <p id="temp-night">{props.data.Temperature.Minimum.Value}&#8451;</p>
      </div>
    </div>
  );
};

export default dayitem;
