import React, { Component } from "react";
import "../../weather-icons/css/weather-icons.css";
import "./FiveDayWeather.css";
import axios from "axios";
import DayItem from "../../components/DayItem/DayItem";

class FiveDayWeather extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      locationid: "",
      locationName: "",
      icons: {
        1: "wi-day-sunny",
        2: "wi-day-cloudy",
        3: "wi-day-cloudy",
        4: "wi-day-cloudy",
        5: "wi-day-cloudy",
        6: "wi-cloud",
        7: "wi-cloud",
        8: "wi-cloudy",
        11: "wi-day-fog",
        12: "wi-day-showers",
        13: "wi-day-showers",
        14: "wi-day-rain",
        15: "wi-day-thunderstorm",
        16: "wi-day-thunderstorm",
        17: "wi-day-thunderstorm",
        18: "wi-day-rain",
        19: "wi-day-snow",
        20: "wi-day-snow",
        21: "wi-day-snow",
        22: "wi-day-snow",
        23: "wi-day-snow",
        24: "wi-day-snow",
        25: "wi-day-snow",
        26: "wi-day-snow",
        27: "wi-day-snow",
        28: "wi-day-snow",
        29: "wi-day-snow",
        30: "wi-day-sunny",
        31: "wi-day-snow",
        32: "wi-day-fog",
        33: "wi-night-clear",
        34: "wi-night-cloudy",
        35: "wi-night-cloudy",
        36: "wi-night-cloudy",
        37: "wi-night-cloudy",
        38: "wi-cloud",
        39: "wi-night-showers",
        40: "wi-night-showers",
        41: "wi-night-thunderstorm",
        42: "wi-night-thunderstorm",
        43: "wi-night-snow",
        44: "wi-night-snow",
      },
    };
  }
  componentDidMount() {
    const getLocationInfo = (position) => {
      axios
        .get(
          "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" +
            getAuth() +
            "&q=" +
            position.coords.latitude +
            "%2C" +
            position.coords.longitude +
            "&language=pl-pl"
        )
        .then((response) => {
          console.log(response);
          this.setState({
            locationName: response.data.LocalizedName,
          });
          getWeatherForecast(response.data.Key);
        })
        .catch(function (error) {
          alert("79 Wystąpił błąd\n" + error);
        });
    };
    getAuth = () => {
      const key = process.env.GITHUB_DEVELOPER_KEY;
      return key;
    };

    const getWeatherForecast = (locationid) => {
      axios
        .get(
          "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
            locationid +
            "?apikey=" +
            process.env.REACT_APP_API_KEY +
            "&language=pl-pl&metric=true"
        )
        .then((response) => {
          this.setState({
            weather: response.data.DailyForecasts,
          });
        })
        .catch(function (error) {
          alert("Wystąpił błąd\n" + error);
        });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            geolocation: true,
          });
          getLocationInfo(position);
        },
        () => {
          alert("Aby zobaczyć pogodę należy włączyć lokalizację");
        }
      );
    }
  }

  render() {
    const items = [];

    for (let item of this.state.weather) {
      items.push(<DayItem key={item[0]} data={item} icon={this.state.icons} />);
    }

    return (
      <div id="page-container">
        <h2 id="title">Pogoda dla {this.state.locationName}</h2>
        <div id="day-container">{items}</div>
      </div>
    );
  }
}

export default FiveDayWeather;
