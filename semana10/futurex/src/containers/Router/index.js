import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Home from "../HomePage";
import ListTrips from "../ListTripsPage";
import CreateTrip from "../CreateTrip";
import ApplicationForm from "../ApplicationForm";
import TripsDatails from "../TripDetailsPage";


export const routes = {
  home: "/home",
  applicationForm: "/applicationForm",
  login: "/",
  list: "/list",
  createTrip: "/createtrip",
  details: "/details",

  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.home} component={Home} exact/>
        <Route path={routes.applicationForm} component={ApplicationForm} exact/>
        <Route path={routes.login} component={LoginPage} exact/>
        <Route path={routes.list} component={ListTrips} exact/>
        <Route path={routes.createtrip} component={CreateTrip} exact/>
        <Route path={routes.details} component={TripsDatails} exact/>
 
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
