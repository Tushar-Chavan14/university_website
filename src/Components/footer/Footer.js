import React from "react";
import "./Footer.css";
import { Link, withRouter } from "react-router-dom";
import Button from "./button"

function Footer(props) {

  const {location} = props;
  if(location.pathname.match('/admin')){
    return(
      <div className="footer-container">
      <div className="footer-links">
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
        <Button/>
          <div className="footer-logo">
          
            <Link to="/" className="social-logo">
              SUK
            </Link>
          </div>
          <small className="website-rights">Desgined and Developed By Tushar</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/tushar.chavan.125760/"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/tushar_chavan___/"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.youtube.com/"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/Tushar30689126"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://www.linkedin.com/in/tushar-chavan-4b09a7221/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            
          </div>
        </div>
      </section>
    </div>
    )
  }
  

  return (
    <div className="footer-container">
      <div className="footer-links">
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              SUK
            </Link>
          </div>
          <small className="website-rights">Desgined and Developed By Tushar</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/tushar.chavan.125760/"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/tushar_chavan___/"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/Tushar30689126"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withRouter(Footer);

