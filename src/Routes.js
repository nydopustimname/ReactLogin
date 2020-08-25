import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";


import Home from "./components/Home";
import NotFound from "./components/NotFound";
import User from "./components/User";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
        <Route exact path="/user" component={User} />
    </Switch>
  );
}
