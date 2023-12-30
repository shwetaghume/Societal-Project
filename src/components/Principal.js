// import React from "react";
// import "./Principal.css";
// import Box from "@mui/material/Box";
// import AspectRatio from "@mui/material/Aspectratio"
// export default function Principal() {
//   return (
//     <div className="flexBox">
//       <div className="box">
//         <Box sx={{ width: 300, resize: "horizontal", overflow: "auto", p: 1 }}>
//           <AspectRatio minHeight={120} maxHeight={200}>
//             <img
//               src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
//               srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
//               alt=""
//             />
//           </AspectRatio>
//         </Box>
//       </div>
//       <div className="box">
//         <h1>Headmaster's Message Govt. Marathi Higher Primary School</h1>
//         <p>
//           “Welcome to Government Marathi Higher Primary School, where every
//           child's potential is nurtured and celebrated. Our dedicated team is
//           committed to providing quality education, fostering creativity, and
//           empowering young minds to excel in both academics and character.
//           Together, let's embark on a journey of learning and growth”.
//         </p>
//         <h2>Shri.M.Y.Karade</h2>
//         <h4>Principal</h4>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import "./Principal.css";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

// export default function Principal() {
//   return (
//     <div className="flexBox">
//       <div className="box">
//         <Box sx={{ width: 300, borderRadius: "sm", p: 1 }}>
//           <img
//             src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
//             srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
//             alt="A beautiful landscape."
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </Box>
//       </div>
//       <div className="box">
//         <h1>Headmaster's Message Govt. Marathi Higher Primary School</h1>
//         <p>
//           “Welcome to Government Marathi Higher Primary School, where every
//           child's potential is nurtured and celebrated. Our dedicated team is
//           committed to providing quality education, fostering creativity, and
//           empowering young minds to excel in both academics and character.
//           Together, let's embark on a journey of learning and growth”.
//         </p>
//         <h2>Shri.M.Y.Karade</h2>
//         <h4>Principal</h4>
//       </div>
//     </div>
//   );
// }

// Correct code for Home Page
// var passe = "dagu37463hdfksh";
// var user = "Ganesh";
import React from "react";
import PropTypes from "prop-types";
import Mainpic from "./Main.png";
import { Button } from "@mui/material";
import APJ from "./APJ.png";
import "./Principal.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Principal({ setProgress }) {
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, []);
  return (
    <>
      <div className="mainpic">
        <div className="head-school">
          <h1>
            Welcome to Govt. Mara
            <span className="under-line">thi Higher Pri</span>
            mary School No.34
          </h1>
          <p>
            Which stands as a beacon of educational excellence, dedicated to
            shaping young minds and nurturing holistic development.
          </p>
          <Button
            component={Link}
            to="/Admission" // Replace with the actual path for admission
            sx={{
              color: "black",
              backgroundColor: "#76ff03",
              "&:hover": {
                backgroundColor: "#76ff03",
              },
            }}
          >
            Take Admission!
          </Button>
        </div>

        <img
          src={Mainpic}
          alt="A beautiful landscape."
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="bottom-div">
          <h4>Announcement</h4>
          <p>
            Enrollment now open at Government Marathi Higher Primary School!
            Join us to explore, learn, and grow in a vibrant, inclusive academic
            community
          </p>
        </div>
      </div>
      <div className="parent-principle">
        <div className="principle-child">
          <img
            src={Mainpic}
            alt="A beautiful landscape."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="principle-child">
          <h1>Headmaster's Message Govt. Marathi Higher Primary School</h1>

          <p>
            “Welcome to Government Marathi Higher Primary School, where every
            child's potential is nurtured and celebrated. Our dedicated team is
            committed to providing quality education, fostering creativity, and
            empowering young minds to excel in both academics and character.
            Together, let's embark on a journey of learning and growth”.
          </p>
          <h2>Shri.M.Y.Karade</h2>
          <h4>Principal</h4>
        </div>
      </div>
      {/* <div className="APj"></div> */}
      <div className="APJ">
        <div className="APJ-qute">
          <h3>
            " Learning gives creativity. Creativity leads to thinking. Thinking
            provides knowledge. Knowledge makes you great. "
          </h3>
          <h5>- A.P.J. Abdul Kalam</h5>
          <p>Former President of India</p>
        </div>
        <div className="APJ-pic">
          <img src={APJ} alt="A beautiful landscape." />
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

Principal.propTypes = {};

export default Principal;
