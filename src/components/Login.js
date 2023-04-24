import React, { Component } from 'react';
import "../styles/login.css";
import loginLibrary from "../images/library-login.jpg";
import indiaFlag from "../images/india-flag.png";
import googleIcon from "../images/google.png";


export class Login extends Component {
  render() {
    const mobileNumberLength = 10;
    return (
      <section className='loginForm'>
        <div className="login">
          <div className='loginImage'>
            <img src={loginLibrary} alt="" />
          </div>
          <div className='mainLogin'>
            <h4>Welcome to</h4>
            <h2>Book My Library</h2>
            <p>Please enter your phone number to Login/Register.</p>
            <div className='loginInput'>
              <form action="">
                <div className='mobileNumberInput'>
                  <img src={indiaFlag} alt="" className='flagIcon' /> +91
                  <input type="tel" id='mobileNumber' placeholder='Enter Mobile No.' minLength={mobileNumberLength} maxLength={mobileNumberLength} required />
                </div>
                <div className='getOTP'>
                  <input type="submit" value="Get OTP" id='getOTP' />
                </div>
              </form>
            </div>
            <div className="divider">
            <hr /> OR <hr />
            </div>
            <div className='googleLogin'>
              <img src={googleIcon} alt="" />
              <div>
                <p>Continue with Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Login;

