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
        <section className="content-frame">
            <img src={window.sheikahSlateURL} alt="sheikah_slate_background"/>
            <div className="content-container">
                
                <div className="content-left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur ad laboriosam quo distinctio maxime quod placeat delectus! Quae iure laudantium beatae reprehenderit tempora placeat eum corrupti nesciunt quod saepe.</p>
                </div>
                <div className="content-right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus, pariatur obcaecati ab odit optio ipsa sunt dolor. Pariatur, quae. Eius incidunt officiis, laboriosam quaerat quam repudiandae eaque adipisci aspernatur?</p>
                </div>
            </div>
        </section>



    </>
)

export default Splash

