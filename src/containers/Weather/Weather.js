import React, { Component } from "react";
import Day from "../../components/Day/Day/Day";
import "./Weather.css";
import axios from "axios";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
              +position.coords.latitude +
              "&lon=" +
              +position.coords.longitude +
              "&lang=pl&units=metric&appid=c87d61644e288c13a5977020a0c39ad4"
          )
          .then((response) => {
            this.setState({ weather: response.data });
          })
          .catch((error) => {
            this.setState({ error: true });
          });
      });
    }
  }

  render() {
    const dateTransformation = () => {
      let date = new Date();
      date = date.toLocaleString("pl-PL", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return date;
    };

    let weatherItem = <p>Something went wrong</p>;
    console.log(this.state);

    if (this.state.weather == null) {
      return true;
    }

    if (!this.state.error) {
      weatherItem = (
        <Day
          key={this.state.weather.id}
          date={dateTransformation()}
          temp={this.state.weather.main.temp}
          description={this.state.weather.weather[0].description}
          icon={this.state.weather.weather[0].icon}
          name={this.state.weather.name}
          humidity={this.state.weather.main.humidity}
          pressure={this.state.weather.main.pressure}
          windSpeed={this.state.weather.wind.speed}
          clouds={this.state.weather.clouds.all}
          temp_max={this.state.weather.main.temp_max}
          temp_min={this.state.weather.main.temp_min}
        />
      );
    }
    return <div className="Weather">{weatherItem}</div>;
  }
}

export default Weather;
