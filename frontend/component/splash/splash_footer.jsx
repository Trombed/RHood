import React from 'react'
import { Link } from 'react-router-dom'

const SplashFooter = () => {

    return (
        <div className="Footer-Container">
            <div className="Footer-Items">
                <img src="/assets/indeed-logo.svg" className="Footer-Logos"/>
            </div>
            <div className="Footer-Items">
            <img src="/assets/facebook-logo.svg" className="Footer-Logos"/>
            </div>
            <div className="Footer-Items">
            <img src="/assets/instagram-logo.svg" className="Footer-Logos"/>
            </div>
            <div className="Footer-Items">
            <img src="/assets/twitter-logo.svg" className="Footer-Logos"/>
            </div>
        </div>
    )
}

export default SplashFooter