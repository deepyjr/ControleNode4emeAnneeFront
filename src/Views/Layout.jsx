import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "../Components/Header";
import Deleted from "./Deleted";
import Created from "./Created";
import AddDriver from "./AddDriver";
import AddCar from "./AddCar";
import EditCar from "./EditCar";
import EditDriver from "./EditDriver";
import Updated from "./Updated";
function Layout() {

  return (
    <div>
        <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/deleted/:id/:type" component={Deleted} />
        <Route exact path="/updated/:id/:type" component={Updated} />
        <Route exact path="/created/:id/:type" component={Created} />
        <Route exact path="/create-car" component={AddCar} />
        <Route exact path="/create-driver" component={AddDriver} />
        <Route exact path="/edit-driver/:id" component={EditDriver} />
        <Route exact path="/edit-car/:id" component={EditCar} />
      </Switch>
    </div>
  );
}

export default Layout;
