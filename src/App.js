import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FiveDayWeather from "./containers/FiveDayWeather/FiveDayWeather";
import Weather from "./containers/Weather/Weather";
import Toolbar from "./components/Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Weather} />
            <Route path="/fiveday" component={FiveDayWeather} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
