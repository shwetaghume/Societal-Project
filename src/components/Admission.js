import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Admission.css";
import admissionImg from "./admissionImg.png";
import { useEffect } from "react";
export default function Admission({ setProgress }) {
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, []);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="section1">
        <div className="s1flex1">
          <img src={admissionImg} className="stdImage" alt="studentImage" />
        </div>
        <div className="s1flex2">
          <h1 className="s1Heading">Admission Details</h1>
          <h3 className="s1SubHeading">
            “ Education is the key to unlocking the world, a passport to
            freedom.”
          </h3>
        </div>
      </div>
      <h1 className="s2Heading">Documents require for admission process</h1>
      <h4 className="s2SubHeading">
        -Previous year Passing certificate with Marks card.<br></br>
        -School Leaving Certificate.<br></br>
        -Student's Aadhar Card.<br></br>
        -Parents Aadhar Card and Mobile Number.
      </h4>

      <h1 className="s3Heading">Frequently Asked Questions</h1>
      <div className="accordianDiv">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              What are the Admission requirements?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Admission requirements vary depending on the which class you
              are applying for. Few of them are listed in School website
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              How do I apply?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Visit our school. Fill out the Application form and submit it
              along with the required Documents.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              How long does the Admission Process take?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Once if you fill the Application form and if you submit the
              required documents to school then your Admission Process is over.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
