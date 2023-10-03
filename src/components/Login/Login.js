import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import '../Login/Login.css'

function Login() {

    const [icon, setIcon] = useState('visibility');
    const [inputType, setInputType] = useState('password');

    const togglePassword = () => {
        if (inputType === 'password') {
            setInputType('text');
            setIcon('visibility_off');
        } else {
            setInputType('password');
            setIcon('visibility');
        }
    }


    return (
        <>
            <div className="main_container">

                <div className="left_side_container">
                    {/* <img src="./img/login.png" alt="img" /> */}
                    <div className="box">Login Image</div>
                </div>

                <div className="right_side_container">
                    <form action="" className='login_form'>
                        <div className="welcome_text">Hi, welcome back</div>
                        {/* ------------- */}

                        <div className="email_box">
                            <label htmlFor="email" className='email_label'>
                                <div>Email</div>
                            </label>

                            <div className="input_box">
                                <span className="material-symbols-outlined">mail</span>
                                <input type="email" name='email' id='email' placeholder='user@example.com' autoComplete='off' className='email_input' required />
                            </div>

                        </div>


                        <div className="password_box">
                            <label htmlFor="password" className='password_label'>
                                <div>Password</div>
                            </label>

                            <div className="input_box">
                                <span className="material-symbols-outlined">lock</span>
                                <input type={inputType} name='password' id='password' placeholder='*********' autoComplete='off' className='password_input' required />
                                <span className="material-symbols-outlined" onClick={togglePassword}>{icon}</span>
                            </div>

                        </div>

                        <div className="btn_button">
                            <button className='login_button' type='submit'>Sign in</button>
                        </div>

                        <div className="link_forgot_signup">
                            <div className="signup_link">
                                <Link to="/register">Register</Link>
                            </div>

                            <div className="devider"></div>

                            <div className="forgot_link">
                                <Link to="/forgot-password">Forgot Password</Link>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login