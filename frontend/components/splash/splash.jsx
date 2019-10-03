import React from 'react'; 
import { Link } from 'react-router-dom';


const Splash = () => (
    <>
        <header className="header-splash">
            <div className="header-icon-logo">
                <img className="icon" src={window.vahRutaURL} /> 
                <p className="project-name">SheikahNote</p>
            </div>
            {/* <div className="header-links-profile">

            </div> */}
            <nav className="header-links-auth">

                <li><Link to="/login" className="login-a">Login</Link></li>
                <li>or</li>
                <li className="li-signup"><Link to="/signup" className="signup-a">Sign up!</Link></li> 

            </nav>
        </header>



    </>
)

export default Splash

