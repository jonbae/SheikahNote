import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

import NotebookIndexContainer from './notebook_index/notebook_index_container'





const MainSection = () => {

    return (
    <div className="main-section-frame">
        <Switch> 
            <Route exact path="/app/notebooks" component={NotebookIndexContainer} /> 


        </Switch>


    </div>
    )
}



export default MainSection; 