import React from 'react';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      email: '',
      password: '',
      isHidden:true, 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.autofill = this.autofill.bind(this);

  }

  handleContinue(e){
    e.preventDefault();
    this.setState({ isHidden: false })
   
  }

  autofill(){
    this.setState({email: 'demo@mail.com', password: 'password' },
    
    )
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {
    const hiddenClass = this.state.isHidden ? "hidden" : "show" ;
    const isContinueButton = this.state.isHidden ? "Continue" : this.props.formType;
    const onContinueClick = this.state.isHidden ? this.handleContinue : {}   ;
    return (

        <div className="login-form-wrapper">
          {/* <img src={window.triforceURL} alt="triforce-background"/> */}

          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
      


              <div className="login-form">
                                    
                {/* icon */}
                  <img className="icon" src={window.vahRutaURL} /> 
                {/* logo */}

                <p className="project-name"> SheikahNote </p>
                <br/>
                {/* little note  */}
                <p className="tagline"> Remember everything important </p>
                <br />
          
                  {/* <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder ="username"
                    className="login-input"
                  />
          

                <br /> */}
                <button className="session-demo-user" type="submit" onClick={this.autofill} >
                  Demo User
                </button>

                {/* <button className="session-submit" type="submit">
                {this.props.formType}
                </button> */}


                <div className="auth-or-line">
                  <p className="auth-or">or</p>
                </div>
                
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                    className="login-input"
                  />
      
                <br />
                


            
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                    className={" login-input " + hiddenClass} // passClass 
                    
                  />
            
                <br />
                {this.renderErrors()}

                {/* will not work */}
                {/* <button className={"session-continue " + !hiddenClass} onClick={this.handleContinue} >
                  Continue
                </button> */}


                <button 
                  className="session-submit "
                  onClick = {onContinueClick}
                > {isContinueButton} </button>
                {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                <div className="bottom-auth-options"> 
                  {this.props.navLink}
                </div>
                      {/* Welcome to SheikahNote!
              <br />
              Please {this.props.formType} or {this.props.navLink} */}
              </div>
            </form>
          </div>
        </div>

    );
  }
}

export default SessionForm;