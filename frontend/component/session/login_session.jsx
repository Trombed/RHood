import React from 'react'

class LoginUser extends React.Component {
    constructor(props){
        super(props)
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
                    <div className='new-user-label-text '>
                    <label>
                        Username
                    </label>
                    </div>
                    <div className='new-user-input-div'>
                        <input type="text" className='new-user-input-field' />
                    </div>
                    <div className='new-user-label-text-div'>
                    <label className='new-user-label-text '>
                        Password
                    </label>
                    </div>
                    <div className='new-user-input-div'>
                    <input type="password" className='new-user-input-field' />
                    </div>
                    <div className='new-user-button-row'>
                    <button className="new-user-sign-in-button">Sign In</button>
                    <button className='demo-user-sign-in-button'>Demo User</button>
                    </div>
                    </div>
                </div>  
            </div>

        )
    }
}

export default LoginUser