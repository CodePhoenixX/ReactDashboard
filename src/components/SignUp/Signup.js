import React, {useState} from 'react'

import { Link } from 'react-router-dom';

import '../SignUp/Signup.css'

function Signup() {

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
            <div className="register_container">

                <div className="left_side_register">
                    {/* <img src="./img/login.png" alt="img" /> */}
                    <div className="register_box">Register Image</div>
                </div>

                <div className="right_side_register">
                    <form action="" className='register_form'>
                        <div className="register_welcome_text">Let's start your journey</div>
                        {/* ------------- */}

                        <div className="fname_lname">
                            <div className="register_fname">
                                <label htmlFor="text" className='user_fname'>
                                    <div>First Name</div>
                                </label>

                                <div className="user_input_box">
                                    <input type="text" name='username' id='Username' placeholder='First Name' autoComplete='off' className='username_finput' required />
                                </div>
                            </div>

                            <div className="register_lname">
                                <label htmlFor="text" className='user_lname'>
                                    <div>Last Name</div>
                                </label>

                                <div className="user_input_box">
                                    <input type="text" name='username' id='Username' placeholder='Last Name' autoComplete='off' className='username_linput' required />
                                </div>
                            </div>

                        </div>

                        <div className="register_email_box">
                            <label htmlFor="email" className='register_email_label'>
                                <div>Email</div>
                            </label>

                            <div className="register_input_box">
                                <span className="material-symbols-outlined">mail</span>
                                <input type="email" name='email' id='Email' placeholder='user@example.com' autoComplete='off' className='register_email_input' required />
                            </div>

                        </div>


                        <div className="register_password_box">
                            <label htmlFor="password" className='register_password_label'>
                                <div>Password</div>
                            </label>

                            <div className="register_input_box">
                                <span className="material-symbols-outlined">lock</span>
                                <input type={inputType} name='password' id='Password' placeholder='Enter at least 8 characters' autoComplete='off' className='register_password_input' required />
                                <span className="material-symbols-outlined" onClick={togglePassword}>{icon}</span>
                            </div>

                        </div>

                        <div className="register_btn_button">
                            <button className='register_button' type='submit'>Register</button>
                        </div>

                        <div className="link_already_account">
                            <div className="signin_link">
                                <div className="have_an_acc">Have an account? <Link to="/sign-in">Sign in</Link></div>
                            </div>


                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}

export default Signup