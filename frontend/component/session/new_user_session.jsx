import React from 'React' 


class NewUserSession extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: ""
        }
      
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderCreateErrors = this.renderCreateErrors.bind(this)
        this.clearError = this.props.clearError.bind(this)
    }

    handleInput(type) {
        return (e) => {
          this.setState({ [type]: e.target.value })
         
        };
     
      };


    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        this.props.processForm(user)
            .then(() => this.props.history.push('/home'))
    }

   
   renderCreateErrors () 
    { 
     return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="Create-Error-Text">
            {error}
          </li>
        ))}
      </ul>
    );
    
    }

    componentWillUnmount() {
        this.clearError()
    }
    
    render(){

        return(
            
            <div className='login-container'>

                    <div className='login-top'>
                        <div className='login-top-logo'>
                            <img src="/assets/new_account_logo.png"/>
                        </div>

                        <div>
                            <ul className="login-top-list">
                               <li className='login-top-list-items'>Account</li>
                               <li className='login-top-list-items'>Funding</li>
                               <li className='login-top-list-items'>Submit</li>
                            </ul>
                        </div>
                    </div>
            


                    <div className='login-body'>
                        <div className='login-body-form'>
                            <div className='login-body-form-row-1'>
                            Make Your Money Move 
                            </div>
                            <div className='login-body-form-row-2'>
                            Robinhood lets you invest in companies you love, comission-free 
                            </div>
                            <form>
                            <div className='login-body-form-rows'>
                            <input type="text" placeholder='Username'
                            className='login-form-field'
                            onChange={this.handleInput("username")}
                            required
                            />
                            </div>
                            <div className='login-body-form-rows'>
                            <input type="text" placeholder='Email Address'
                            className='login-form-field'
                            onChange={this.handleInput("email")}
                            type="email" required
                             />
                            </div>
                            <div className='login-body-form-rows'>
                            <input type="password" 
                            name="password" autoComplete="current-user" placeholder='Password (min. 6 characters)'  
                            className='login-form-field' 
                            onChange={this.handleInput("password")}
                            minLength="6" required />
                            </div>
                            <div>
                                {this.renderCreateErrors()}
                            </div>

                            <div className='login-body-form-rows'>
                            <button className="login-session-button"
                            onClick={this.handleSubmit}>Continue</button>
                            </div>
                            </form>
                            <div className='login-body-form-existing-user'>
                            Already started? Log in to complete your application.
                            </div>
                        </div>

                        <div className='login-body-image'>
                            <div className='login-body-image-container'>   
                                <video autoPlay loop preload="auto" className='login-video' muted type='video/mp4'>
                                     <source src="/assets/FirstExperienceLockMovie.mp4"  />
                                 </video>
                                 <div className='login-video-text'>
                                     <div className='login-video-text-row-1'>
                                    Commission-free stock trading.
                                    </div >
                                    <div className='login-video-text-row-2'>
                                    We've cut the fat that makes other brokerages costly, like manual account management and hundreds of storefront locations, so we can offer zero commission trading.
                                    </div>
                                </div>
                            </div>

              
                          

                        </div>      
                    </div>


            </div>
            
        )
    }
}


export default NewUserSession