import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "../Components/Header";
import Deleted from "./Deleted";
import Created from "./Created";
import AddDriver from "./AddDriver";
import AddCar from "./AddCar";

function Layout() {

  return (
    <div>
        <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/deleted/:id" component={Deleted} />
        <Route exact path="/created/:id" component={Created} />
        <Route exact path="/create-car" component={AddCar} />
        <Route exact path="/create-driver" component={AddDriver} />
      </Switch>
    </div>
  );
}

export default Layout;
