import React from 'react'
import { Link } from 'react-router-dom'

const SplashFooter = () => {

    return (
        <div className="Footer-Container">
            <div className="Footer-Items">
                <img src="/indeed-logo.svg" className="Footer-Logos"/>
            </div>
            <div className="Footer-Items">
            <img src="/facebook-logo.svg" className="Footer-Logos"/>
            </div>
            <div className="Footer-Items">
            <img src="/instagram-logo.svg" className="Footer-Logos"/>
            </div>
            <div className="Footer-Items">
            <img src="/twitter-logo.svg" className="Footer-Logos"/>
            </div>
        </div>
    )
}

export default SplashFooter