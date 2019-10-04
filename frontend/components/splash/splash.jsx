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
   
            <nav className="header-links-auth">

                

                <li><Link to="/signup" className="signup-a">Sign up</Link></li>
                <li>or</li>

                <li className="li-login "><Link to="/login" className="login-a ">Log in</Link></li> 
                {/* refactor this  */}
            </nav>
        </header>
        <section className="content-frame">

            <div className="content-container">
                
                <div className="content-left">
                    <p className="content-left-title">Log <br/> your journey with <br/> SheikahNote </p>
                    <p className="content-left-tagline">
                        Take notes anywhere. 
                        Find information faster. 
                        Share ideas with anyone. 
                        Meeting notes, web pages, projects, to-do lists—
                        with SheikahNote as your note taking app, 
                        nothing falls through the cracks.
                    </p>
                </div>
                <div className="content-right">
                    
                    {/* <p className="content-right-para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa excepturi inventore, sed sit non placeat minima? Consectetur amet voluptatem nulla? Error eveniet quisquam voluptatem quos sunt quia doloremque, voluptatibus velit. </p> */}
                </div>
            </div>
        </section>

        <section className="card-one">
            
            <div className="subcard-pan">
                <img src={window.triforceURL} alt="triforce-icon"/>
            </div>
            <h3 className="subcard-one-tagline">Explore the world</h3>
           
            <ul className="subcard-rune-images">
                      {/* refactor with maps and subcard detail */}
                <img src={window.roundBombURL} alt="Round Bomb"/>
                <img src={window.squareBombURL} alt="Square Bomb"/>
                <img src={window.magnesisURL} alt="Magnesis"/>
                <img src={window.stasisURL} alt="Stasis"/>
                <img src={window.cryonisURL} alt="Cryonis"/>

            </ul>
      
      

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

