import React, { Component } from "react";
import Day from "../components/Day/Day";
import "./Weather.css";
import axios from "axios";

class Weather extends Component {
  state = {
    weather: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        axios
          .get(
            "http://api.openweathermap.org/data/2.5/weather?lat=" +
              +position.coords.latitude +
              "&lon=" +
              +position.coords.longitude +
              "&lang=pl&units=metric&appid=c87d61644e288c13a5977020a0c39ad4"
          )
          .then(response => {
            this.setState({ weather: response, loading: false });
          })
          .catch(error => {
            this.setState({ error: true, loading: false });
          });
      });
    }
  }

  render() {
    const dateTransformation = unformattedDate => {
      let date = new Date(unformattedDate);
      date = date.toLocaleString();
      return date;
    };

    let weatherItem = <p>Something went wrong</p>;
    console.log(this.state);

    // if(this.state.loading){

    // }

    if (this.state.weather == null) {
      return true;
    }

    if (!this.state.error) {
      weatherItem = (
        <Day
          key={this.state.weather.data.id}
          date={dateTransformation(this.state.weather.data.dt)}
          temp={this.state.weather.data.main.temp}
          description={this.state.weather.data.weather[0].description}
          icon={this.state.weather.data.weather[0].icon}
        />
      );
    }
    return <selection className="Weather">{weatherItem}</selection>;
  }
}

export default Weather;
