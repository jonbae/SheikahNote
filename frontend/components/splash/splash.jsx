import React from 'react'; 
import { Link } from 'react-router-dom';

const emptyEmail = "Required data missing";
const emptyPassword = "This is a required field"; 
const incorrectPassword = "Incorrect Password"; 



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
            {/* <img src={window.sheikahSlateURL} alt="sheikah_slate_background"/> */}
            <div className="content-container">
                
                <div className="content-left">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur ad laboriosam quo distinctio maxime quod placeat delectus! Quae iure laudantium beatae reprehenderit tempora placeat eum corrupti nesciunt quod saepe.</p> */}
                    <p className="content-left-title">A rich-text editor with a spin</p>
                    <p className="content-left-tagline">Take notes anywhere. 
                        Find information faster. 
                        Share ideas with anyone. 
                        Meeting notes, web pages, projects, to-do lists—
                        with SheikahNote as your note taking app, 
                        nothing falls through the cracks.
                    </p>
                </div>
                <div className="content-right">
                    <p className="content-right-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus, pariatur obcaecati ab odit optio ipsa sunt dolor. Pariatur, quae. Eius incidunt officiis, laboriosam quaerat quam repudiandae eaque adipisci aspernatur?</p>
                </div>
            </div>
        </section>

        <section className="card-one">
            
            <div className="subcard-pan">
                <img src={window.leavingSORURL} alt="panshot"/>
            </div>
            <h3 className="subcard-one-tagline">Explore the world</h3>
           
            <ul className="subcard-rune-images">
                <img src={window.roundBombURL} alt="Round Bomb"/>
                <img src={window.squareBombURL} alt="Square Bomb"/>
                <img src={window.magnesisURL} alt="Magnesis"/>
                <img src={window.stasisURL} alt="Stasis"/>
                <img src={window.cryonisURL} alt="Cryonis"/>

            </ul>
            {/* refactor with maps and subcard detail */}
            {/* <ul className="subcards">
                <li className="subcard-one">Remote Bomb</li>
                <li className="subcard-two">Magnesis</li>
                <li className="subcard-three">Stasis</li>
                <li className="subcard-three">Cryonis</li>

            </ul> */}


        </section>


        <footer>
            <div className="footer-header">
                <img className="icon" src={window.vahRutaURL} /> 
                <p className="project-name">SheikahNote</p>
            </div>
            <ul className="social-links">
                <li> <a href="#" className="icon-github"> Github </a> </li>
                <li> <a href="#" className="icon-linkedin"> Linkedin </a> </li> 
                {/* linkedin favicon is blank */}

            </ul>

        </footer>



    </>
)

export default Splash

