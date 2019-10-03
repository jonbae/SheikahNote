import React from 'react' ; 
import { Provider } from 'react-redux'; 
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SplashContainer from "./splash/splash_container";
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    {/* <header>
      <Link to="/" className="header-link">
        <h1>SheikahNote</h1>
      </Link>
      <GreetingContainer /> 
    </header> */}


    
     <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route path="/" component={SplashContainer} /> 
     </Switch>
  </> 
)

export default App;