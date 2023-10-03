import React from 'react'
import '../Sidebar/Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <nav className="sidebar locked">
        <div className="logo_items flex">
          <span className="nav_image">
            <img src='./img/level-up.png' alt="logo_img" />
          </span>
          <span className="logo_name">LevelUp</span>
          {/* <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i> */}
          {/* <i className="bx bx-x" id="sidebar-close"></i> */}
        </div>
        <div className="menu_container">
          <div className="menu_items">
            {/* <ul className="menu_item"> */}
              {/* <div className="menu_title flex">
                <span className="title">Dashboard</span>
                <span className="line"></span>
              </div> */}
              {/* <li className="item">
                <Link to="#" className="link flex">
                <i className='bx bx-briefcase-alt-2' ></i>
                  <span>Compaigns</span>
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link flex">
                <i className='bx bx-notepad' ></i>
                  <span>Prospects</span>
                </Link>
              </li>
            </ul> */}
            {/* <ul className="menu_item"> */}
              {/* <div className="menu_title flex">
                <span className="title">Editor</span>
                <span className="line"></span>
              </div> */}
              {/* <li className="item">
                <Link to="#" className="link flex">
                <i className='bx bx-message-alt'></i>
                  <span>Inbox</span>
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link flex">
                <i className='bx bxs-report'></i>
                  <span>Reports</span>
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link flex">
                <i className="bx bx-cog"></i>
                  <span>Settings</span>
                </Link>
              </li>
            </ul> */}
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="line"></span>
              </div>
              <li className="item">
                <Link to="/dashboard" className="link flex">
                <i className='bx bxs-dashboard' ></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              {/* <li className="item">
                <Link to="#" className="link flex">
                <i className='bx bx-line-chart'></i>
                  <span>Pipelines</span>
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link flex">
                <i className='bx bx-bookmark'></i>
                  <span>Templates</span>
                </Link>
              </li> */}

              <li className="item">
                <Link to="/call-reporting" className="link flex">
                <i class='bx bxs-phone'></i>
                  <span>Cold Call Reporting</span>
                </Link>
              </li>
              
              <li className="item">
                <Link to="#" className="link flex">
                <i class='bx bxl-gmail' ></i>
                  <span>Email Reporting</span>
                </Link>
              </li>
              
              <li className="item">
                <Link to="#" className="link flex">
                <i class='bx bxl-linkedin-square' ></i>
                  <span>LinkedIn Reporting</span>
                </Link>
              </li>
            </ul>

            <ul className="menu-item">
            <div className="menu_title flex">
                <span className="line"></span>
              </div>

              <li className="item">
                <Link to="#" className="link flex">
                <i className='bx bx-command'></i>
                  <span>Admin</span>
                </Link>
              </li>

              <li className="item">
                <Link to="#" className="link flex">
                <i className='bx bx-log-out bx-rotate-180 red' ></i>
                  <span className='red'>Log Out</span>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </>
  )
}

export default Sidebar