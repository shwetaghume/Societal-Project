import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
export default function Footer() {
  return (
    <>
      <Box>
        <div className="footerContainer">
          <h2 className="footerHeading">
            Govt. Marathi Higher Primary School No.34
          </h2>
          <div className="flexContainer">
            <div className="flexchild">
              <h3>About</h3>
              <p className="abtPara">
                At Government Marathi Higher Primary SchoolNo.34, we are devoted
                to providing education,nurturing potential, and holistic
                development forevery student in a vibrant and inclusive learning
                community.
              </p>
            </div>
            <div className="flexchild">
              <h3>Contact Info</h3>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91-12345678
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Angol Main Road, Angol, Belagavi.
              </p>
            </div>
            <div className="flexchild">
              <h3>QuickLinks</h3>
              <p>
                <a href="https://ganesh.click">- About</a>
              </p>
              <p>
                <a href="https://ganesh.click">- Admission</a>
              </p>
              <p>
                <a href="https://ganesh.click">- Staff Details</a>
              </p>
              <p>
                <a href="https://ganesh.click">- Gallery</a>
              </p>
              <p>
                <a href="https://ganesh.click">-Contact</a>
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
            Copyright ©2023. All rights reserved. | This website is made by
            students of KLS GIT
          </p>
        </div>
      </Box>
    </>
  );
}
