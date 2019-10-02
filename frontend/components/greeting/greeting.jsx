import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className="login-a">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup" className="signup-a">Sign up!</Link>
    </nav>
  );
  // const personalGreeting = () => (
  //   <hgroup className="header-group">
  //     <h2 className="header-name">Hi, {currentUser.username}!</h2>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //   </hgroup>
  // );

  // return currentUser ? personalGreeting() : sessionLinks();
  return sessionLinks();
};


export default Greeting;
