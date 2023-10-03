import React from 'react'
import {Link} from 'react-router-dom';
import '../Navbar/Navbar.css'

function Navbar() {
    return (
        <>
            <div className="container">
                <nav className='navigation'>

                    <div className="navlink">
                        <ul className='nav_flex logo'>
                            <li>LevelUp</li>
                        </ul>


                        <div className="right_side">
                            <div className="right_item">
                                <ul>
                                    <li className='bell'><i className='bx bx-bell' ></i></li>
                                </ul>
                            </div>

                            <div className="right_item">
                                <ul>
                                    <li className='loggedin_user'>Hello John <i className='bx bx-chevron-down'></i></li>
                                    <div className="dropdown-content">
                                        <Link to ="#">Link 1</Link>
                                        <Link to ="#">Link 2</Link>
                                        <Link to ="#">Link 3</Link>
                                    </div>
                                </ul>
                            </div>
                        </div>

                    </div>

                </nav>
            </div>
        </>
    )
}

export default Navbar