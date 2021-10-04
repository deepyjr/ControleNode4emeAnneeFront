import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "../Components/Header";


function Layout() {

  return (
    <div>
        <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default Layout;
