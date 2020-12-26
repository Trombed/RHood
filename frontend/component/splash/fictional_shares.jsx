import React from 'react';
import {Link} from 'react-router-dom';

const FictionalShares = () => {
  return (
    <div className="Fictional-Container">
      <div className="Fictional-Grid-1">
        <div className="Fictional-Grid-1-Title">
                Introducing Fictional Shares
        </div>
        <div className="Fictional-Grid-1-Slogan">
                Invest in thousands of stocks with as little as $0.
        </div>

        <div className="Fictional-Grid-1-Description">
          <div className='Fictional-Grid-1-Description-Container'>
            <div className="Fictional-Grid-Description-Title">
                        Invest Any Amount
            </div>
            <div className="Fictional-Grid-Description-Description">
                        Choose how much you want to invest, and we’ll
                        convert from dollars to parts of a whole share.
            </div>
          </div>
          <div className='Fictional-Grid-1-Description-Container'>
            <div>
              <div className="Fictional-Grid-Description-Title">
                        Build a Balanced Portfolio
              </div>
              <div className="Fictional-Grid-Description-Description">
                        Customize your portfolio with pieces of different
                        companies and funds to help reduce risk.
              </div>
            </div>
          </div>

          <div className='Fictional-Grid-1-Description-Container'>
            <div>
              <div className="Fictional-Grid-Description-Title">
                        Trade in Real Time
              </div>
              <div className="Fictional-Grid-Description-Description">
                        Investing in fractional shares is real-time and,
                        as always, commission-free.
              </div>
            </div>
          </div>

        </div>

        <div className="Fictional-Sign-In-Container">
          <Link to="/login">
            <button className="splashNavSignUp Fictional-Sign-In ">
              Sign In
            </button>
          </Link>
        </div>

      </div>

      <div className="Fictional-Grid-2">
        <img src="/splash-fictional.png" className="Fictional-Image" />
      </div>

    </div>
  );
};

export default FictionalShares;
