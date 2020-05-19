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
        1: "01d@2x.png",
        2: "02d@2x.png",
        3: "02d@2x.png",
        4: "02d@2x.png",
        5: "02d@2x.png",
        6: "03d@2x.png",
        7: "03d@2x.png",
        8: "04d@2x.png",
        11: "50d@2x.png",
        12: "09d@2x.png",
        13: "09d@2x.png",
        14: "10d@2x.png",
        15: "11d@2x.png",
        16: "11d@2x.png",
        17: "11d@2x.png",
        18: "10d@2x.png",
        19: "13d@2x.png",
        20: "13d@2x.png",
        21: "13d@2x.png",
        22: "13d@2x.png",
        23: "13d@2x.png",
        24: "13d@2x.png",
        25: "13d@2x.png",
        26: "13d@2x.png",
        27: "13d@2x.png",
        28: "13d@2x.png",
        29: "13d@2x.png",
        30: "01d@2x.png",
        31: "13d@2x.png",
        32: "50d@2x.png",
        33: "01d@2x.png",
        34: "02d@2x.png",
        35: "02d@2x.png",
        36: "02d@2x.png",
        37: "02d@2x.png",
        38: "03d@2x.png",
        39: "09d@2x.png",
        40: "09d@2x.png",
        41: "11d@2x.png",
        42: "11d@2x.png",
        43: "13d@2x.png",
        44: "13d@2x.png",
      },
    };
  }
  componentDidMount() {
    const getLocationInfo = (position) => {
      axios
        .get(
          "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" +
            process.env.REACT_APP_API_KEY +
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
