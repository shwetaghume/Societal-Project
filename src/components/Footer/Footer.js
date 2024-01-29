import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Box>
        <div className="footerContainer">
          <h2 className="footerHeading">Great Imperial University Michigan</h2>
          <div className="flexContainer">
            <div className="flexchild">
              <h3>About</h3>
              <p className="abtPara">
                At Great Imperial University Michigan , we are devoted to
                providing education,nurturing potential, and holistic
                development forevery student in a vibrant and inclusive learning
                community.
              </p>
            </div>
            <div className="flexchild">
              <h3>Contact Info</h3>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91-12345678
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Great Imperial University, Midwestern United States
              </p>
            </div>
            <div className="flexchild">
              <h3>QuickLinks</h3>
              <p>
                <Link to="/about">- About</Link>
              </p>
              <p>
                <Link to="/admission">- Admission</Link>
              </p>
              <p>
                <Link to="/staff">- Staff Details</Link>
              </p>
              <p>
                <Link to="/gallery/event">- Gallery / Event</Link>
              </p>
              <p>
                <Link to="/contact">- Contact</Link>
              </p>
              <p>
                <Link to="/developers">- Developers</Link>
              </p>
            </div>
            <div className="flexchild">
              <h3>Have a question?</h3>

              <a
                href="https://wa.me/7204917202"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Get In Touch </button>
              </a>
            </div>
          </div>
        </div>
        <div className="copy">
          <hr></hr>
          <p>
            Copyright ©2023. All rights reserved. | This website is made by Team
            Matrix Glitch
          </p>
        </div>
      </Box>
    </>
  );
}
