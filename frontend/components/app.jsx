import React from "react";
import { Provider } from "react-redux";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import MainPageContainer from "./main_page/main_page_container";

import Modal from "./modal/modal";

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import NotebookIndexContainer from "./main_page/notebook_index/notebook_index_container";
import SidebarContainer from "./main_page/sidebar/sidebar_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <>
    {/* <header>
      <Link to="/" className="header-link">
        <h1>SheikahNote</h1>
      </Link>
      <GreetingContainer /> 
    </header> */}

    {/* <ProtectedRoute path="/notebooks" component={SidebarContainer} /> */}
    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="/notes" component={EditorContainer} /> */}
      {/* <Route path="/notebooks/:notebook_id/notes/:note_id" component={NoteShowContainer} /> */}
      <ProtectedRoute path="/app" component={MainPageContainer} />
      {/* <ProtectedRoute exact path="/notebooks" component={NotebookIndexContainer} />  */}

      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </>
);

export default App;
