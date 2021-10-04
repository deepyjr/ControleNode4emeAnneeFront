import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "../Components/Header";
import Deleted from "./Deleted";


function Layout() {

  return (
    <div>
        <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/delete/:id" component={Deleted} />
      </Switch>
    </div>
  );
}

export default Layout;
