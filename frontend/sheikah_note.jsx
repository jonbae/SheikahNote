import React from "react" 
import ReactDOM from "react-dom" ;

import Root from './components/root'
import configureStore from './store/store' 

document.addEventListener("DOMContentLoaded", () => {
  //Testing start 


  //Testing end
  
  
  
  const root = document.getElementById("root"); 
  const store = configureStore(); 
  ReactDOM.render(<Root store={store} /> , root) 
  // ReactDOM.render(<Root store={store} /> , root) 
})