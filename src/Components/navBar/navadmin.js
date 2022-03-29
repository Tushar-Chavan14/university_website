import React from 'react'
import { Link } from 'react-router-dom'
import "./nav2.css"

function Navadmin() {
    return (
        <div>
           
     
           <nav>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">SUK</Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/mails">Read mails</Link>
            </li>
            <li>
              <Link to="/admin/updatenotice">Update Notices</Link>
            </li>
           
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars ham"></i>
          </label>
        </div>
      </nav>


        </div>
    )
}

export default Navadmin
