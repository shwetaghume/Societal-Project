import React from "react";
// import PropTypes from "prop-types";
// import principalImg from "./principal.jpg";
import principalImg from "./principalSir.jpg";
import Mainpic from "./Main.png";
// import APJ from "./APJ.png";
import APJ from "./APJ.png";
import "./Home.css";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Principal({ setProgress }) {
  const matches = useMediaQuery("(max-width:700px)");
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);
  return (
    <>
      <div className="mainpic">
        <div className="head-school">
          <h1>
            Welcome to
            <span className="under-line"> Goverment Marathi </span>Primary
            School
          </h1>
          <p>
            Which stands as a beacon of educational excellence, dedicated to
            shaping young minds and nurturing holistic development.
          </p>

          <Button
            className="admButton"
            sx={{
              color: "black",
              padding: " 8px 20px",
              borderRadius: "20px",
              backgroundColor: "#42de4e",
              display: matches ? "none" : "",

              "&:hover": {
                backgroundColor: "#76ff03",
              },
            }}
          >
            <Link to="/admission" className="TakeAdm">
              Take Admission
            </Link>
          </Button>
        </div>

        <img
          src={Mainpic}
          alt="A beautiful landscape."
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="MainPicImg"
        />
        <div className="bottom-div">
          <h1 className="announcement">Announcement</h1>
          <p>
            Enrollment now open at Welcome to Goverment Marathi Primary School!
            Join us to explore, learn, and grow in a vibrant, inclusive academic
            community
          </p>
        </div>
      </div>
      <div className="parent-principle">
        <div className="principle-child principle-child1">
          <img
            className="principalImgg"
            src={principalImg}
            alt="A beautiful landscape."
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
        </div>
        <div className="principle-child principle-child2">
          <h2>
            Principal's Message Welcome to Goverment Marathi Primary School
          </h2>

          <p>
            “Welcome to Welcome to Goverment Marathi Primary School, where every
            child's potential is nurtured and celebrated. Our dedicated team is
            committed to providing quality education, fostering creativity, and
            empowering young minds to excel in both academics and character.
            Together, let's embark on a journey of learning and growth”.
          </p>
          <h2>Kushkumar Laxman Desai</h2>
          <h4>Principal</h4>
        </div>
      </div>

      <div className="APJ">
        <div className="APJ-qute">
          <h3>
            " Learning gives creativity. Creativity leads to thinking. Thinking
            provides knowledge. Knowledge makes you great."
          </h3>
          {/* <h5>-  A.P.J. Abdul Kalam</h5>
          <p>Former President of India</p> */}
        </div>
        <div className="APJ-pic">
          <img src={APJ} alt="A beautiful landscape." width={"450px"} />
        </div>
      </div>
    </>
  );
}

Principal.propTypes = {};

export default Principal;
