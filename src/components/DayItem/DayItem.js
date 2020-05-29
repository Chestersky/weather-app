import React from "react";
import moment from "moment";
import "moment/locale/pl";
import "./DayItem.css";
import "../../weather-icons/css/weather-icons.css";

const dayitem = (props) => {
  return (
    <div className="column">
      <h4>{moment(props.data.Date).locale("pl").format("dddd")}</h4>
      <div className="icon">
        <i className={"wi " + props.icon[props.data.Day.Icon]} />
        <p className="lead">{props.data.Day.IconPhrase}</p>
      </div>
      <div className="temp">
        <p>
          {Math.round(props.data.Temperature.Maximum.Value)}
          <sup>&#8451;</sup>
        </p>
        <p id="temp-night">
          {Math.round(props.data.Temperature.Minimum.Value)}
          <sup>&#8451;</sup>
        </p>
      </div>
    </div>
  );
};

export default dayitem;
