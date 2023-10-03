import React from 'react'
import { Link } from 'react-router-dom'

import '../ForgotPass/ForgotPass.css'

function ForgotPass() {
  return (
    <>
        <div className="forgot_password">
        <div className="left_side_forgot">
          {/* <img src="./img/login.png" alt="img" /> */}
          <div className="forgot_box">Register Image</div>
        </div>

        <div className="right_side_forgot">
          <form action="" className='forgot_form'>
            <div className="forgot_heading">Trouble signing in?</div>
            <div className="forgot_subheading">Enter the email associated with your account and <br /> we'll send you a recovery link</div>
            {/* ------------- */}

            <div className="forgot_email_box">

              <label htmlFor="email" className='forgot_email_label'>
                <div>Email</div>
              </label> 

              <div className="forgot_input_box">
                <span className="material-symbols-outlined">mail</span>
                <input type="email" name='email' id='email' placeholder='user@example.com' autoComplete='off' className='forgot_email_input' required />
              </div>

            </div>

            <div className="forgot_btn_button">
              <button className='forgot_button' type='submit'>Send</button>
            </div>

            <div className="return_sign_in">
              <div className="return_link">
                <Link to="/sign-in">Return to sign in</Link>
              </div>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}

export default ForgotPass