import "./nav2.css";
import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Administration
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Administration
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <div className="rowbg"></div>
                  </div>
                  <div className="row">
                    <header>Administration</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/chancellor">chancellor</Link>
                      </li>
                      <li>
                        <Link to="/error">secratory</Link>
                      </li>
                      <li>
                        <Link to="/">vice-chancellor</Link>
                      </li>
                      <li>
                        <Link to="/">pro vice-chancellor</Link>
                      </li>
                      <li>
                        <Link to="/">pro vice-chancellor</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>.</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/">registrar</Link>
                      </li>
                      <li>
                        <Link to="/">registrar Evalution</Link>
                      </li>
                      <li>
                        <Link to="/">Dean 1</Link>
                      </li>
                      <li>
                        <Link to="/">dean 2</Link>
                      </li>
                      <li>
                        <Link to="/">finance officer</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Admission
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Admission
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Admission</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/error">Admission Criteria</Link>
                      </li>
                      <li>
                        <Link to="/error">Regulations</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Under Graduate programs</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/error">Faculty of Engg & technology(CO-ED)</Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Engg & technology(Womens)</Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Bussiness Studies(CO-ED)</Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Bussiness Studies(Womens)</Link>
                      </li>
                      <li>
                        <Link to="/error">
                          Faculty of Computer Application(CO-ED)
                        </Link>
                      </li>
                      <li>
                        <Link to="/error">
                          Faculty of Computer Application(Womens)
                        </Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Architechture(CO-ED)</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Post Graduate programs</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/error">Faculty of Engg & technology(CO-ED)</Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Engg & technology(Womens)</Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Bussiness Studies</Link>
                      </li>
                      <li>
                        <Link to="/error">
                          Faculty of Computer Application(CO-ED)
                        </Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Tourism Administration</Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Science & technology</Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Fine Arts</Link>
                      </li>
                      <li>
                        <Link to="/error">Faculty of Languages</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Acadmics
              </Link>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                Acadmics
              </label>
              <ul className="drop-menu">
                <li>
                  <Link to="/">Under Graduate Programs</Link>
                </li>
                <li>
                  <Link to="/">Post Graduate Programs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">About us</Link>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                About us
              </label>
              <ul className="drop-menu">
                <li>
                  <Link to="/officersUniversity">officers of the university</Link>
                </li>
                <li>
                  <Link to="/MissionandVission">Mission & vission</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars ham"></i>
          </label>
        </div>
      </nav>
      <div className="bg banimg"></div>
    </div>
  );
};

export default Navbar;
