import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FiveDayWeather from "./containers/FiveDayWeather/FiveDayWeather";
import Weather from "./containers/Weather/Weather";
import Toolbar from "./components/Toolbar/Toolbar";
import Container from "react-bootstrap/Container";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Weather} />
            <Route path="/fiveday" component={FiveDayWeather} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
