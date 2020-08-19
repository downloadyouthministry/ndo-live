import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import View from "./View";
import "./App.css";

const ids = ["1234", "5678", "aaaa"];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/view/:eventId"
            render={(props) =>
              ids.includes(props.match.params.eventId) ? (
                <View {...props} />
              ) : (
                <Home />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
