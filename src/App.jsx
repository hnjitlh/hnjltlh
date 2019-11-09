import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Master_Detail3 from "./components/Master_Detail3";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/">
            <Redirect to="/Master_Detail3" />
          </Route>
          <Route path = "/Master_Detail3" component = { Master_Detail3 } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
