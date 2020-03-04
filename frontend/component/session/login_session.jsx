import React from 'react'
import { Link, Redirect } from 'react-router-dom';


class LoginUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
        this.renderLoginHighlight = this.renderLoginHighlight.bind(this)

     
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => this.props.history.push('/home'))
      
        
    }

    handleDemoLogin(e) {
     
        e.preventDefault();
        this.props.demoLogin()
            .then(() => this.props.history.push('/home'))
    }

    handleInput(type) {
        return (e) => {
          this.setState({ [type]: e.target.value })
        };
      };

    renderLoginErrors() {
        
        return(
        <ul>
            <li key="error" className="Login-Error-Text">
                {this.props.errors[0]}
                {this.renderLoginHighlight()}
            </li>
        </ul>

        );
    }

    renderLoginHighlight() {
        $(".new-user-input-field").addClass("error-login-highlight")
    }


    render() {
        
        return(
            <div className='new-user-grid'>
                <div className='new-user-grid-1'>
                
                </div>

                <div className='new-user-grid-2'>
                    <div className='new-user-grid-2-format'>
                    <div className='new-user-welcome-text'>
                    Welcome to RobinHood 
                    </div>
                    <form>
                    <div className='new-user-label-text '>
                    <label>
                        Username
                    </label>
                    </div>
                    <div className='new-user-input-div'>
                        <input type="text" autoComplete='current-user' 
                        onChange={this.handleInput("username")}className='new-user-input-field' />
                    </div>
                    <div className='new-user-label-text-div'>
                    <label className='new-user-label-text '>
                        Password
                    </label>
                    </div>
                    <div className='new-user-input-div'>
                    <input type="password" onChange={this.handleInput("password")}  autoComplete="current-password" className='new-user-input-field' ng-hide='true' />
                        <div className="Login-Error_Text-Box">   
                         
                            {this.renderLoginErrors()}
                        </div>
                    </div>
                    <div className='new-user-button-row'>
                    <button className="new-user-sign-in-button" onClick={this.handleSubmit}>Sign In</button>
                    <button className='demo-user-sign-in-button' onClick={this.handleDemoLogin}>Demo User</button>
                    </div>
                    </form>
                    </div>
                </div>  
            </div>

        )
    }
}

export default LoginUser