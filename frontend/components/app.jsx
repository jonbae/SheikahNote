import React from "react";
import { Provider } from "react-redux";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import MainPageContainer from "./main_page/main_page_container";

import Modal from "./modal/modal";

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <>
    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      <ProtectedRoute path="/app" component={MainPageContainer} />

      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </>
);

export default App;
