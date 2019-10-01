import React from 'react' ; 
import { Provider } from 'react-redux'; 
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';

// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    <header>
      <Link to="/" className="header-link">
        <h1>SheikahNote</h1>
      </Link>
      <GreetingContainer /> 
    </header>


{/*     
    <Switch>


    </Switch> */}
  </> 
)

export default App;