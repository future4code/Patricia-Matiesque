import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage/index"
import SignupPage from "../SingupPage/index"
import FeedPage from "../FeedPage/index"
import EditPasswordPage from "../EditPasswordPage/index"
import CreateVideoPage from "../CreateVideoPage/index"
import VideoDetailsPage from "../VideoDetailsPage/index"


export const routes = {
  root: "/",
  signup: "/signup",
  feed: "/feed",
  edditPassword: "/newPassword",
  createVideo: "/video/create",
  videoDetails: "/video/details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} exact />
        <Route path={routes.signup} component={SignupPage} exact />
        <Route path={routes.feed} component={FeedPage} exact />
        <Route path={routes.edditPassword} component={EditPasswordPage} exact />
        <Route path={routes.createVideo} component={CreateVideoPage} exact />
        <Route path={routes.createVideo} component={VideoDetailsPage} exact />

      </Switch>
    </ConnectedRouter>
  );
}

export default Router;