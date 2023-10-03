import React from 'react'
import '../MainContent/Content.css'

import { Link } from 'react-router-dom'

function Content() {

    return (
        <>
            <div className="container_main">
                <div className="card_container">
                    
                    <div className="card">
                        <div className="card_info">
                            <i className='bx bxs-envelope' ></i>

                            <h2>Gmail</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, consectetur. Quos similique excepturi eius, sint, rerum quis amet eos facilis voluptate saepe</p>

                            <Link to="" className="button">Connect</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_info">
                            <i className='bx bxs-envelope' ></i>

                            <h2>Outlook</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, consectetur. Quos similique excepturi eius, sint, rerum quis amet eos facilis voluptate saepe</p>

                            <Link to="" className="button">Connect</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_info">
                            <i className='bx bxs-envelope' ></i>

                            <h2>SMTP</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, consectetur. Quos similique excepturi eius, sint, rerum quis amet eos facilis voluptate saepe</p>

                            <Link to="" className="button">Connect</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_info">
                            <i className='bx bxs-envelope' ></i>

                            <h2>Amazon SES</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, consectetur. Quos similique excepturi eius, sint, rerum quis amet eos facilis voluptate saepe</p>

                            <Link to="" className="button">Connect</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_info">
                            <i className='bx bxs-envelope' ></i>

                            <h2>SendGrid</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, consectetur. Quos similique excepturi eius, sint, rerum quis amet eos facilis voluptate saepe</p>

                            <Link to="" className="button">Connect</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_info">
                            <i className='bx bxs-envelope' ></i>

                            <h2>Microsoft Exchange</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, consectetur. Quos similique excepturi eius, sint, rerum quis amet eos facilis voluptate saepe</p>

                            <Link to="" className="button">Connect</Link>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Content