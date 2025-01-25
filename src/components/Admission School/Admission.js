import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Admission.css";
import admissionImg from "./admissionImage.png.avif";
import { useEffect } from "react";
export default function Admission({ setProgress }) {
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);
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
      <hr className="hrForAdm"></hr>

      <div className="section2">
        <div className="s2flex1">
          <h1 className="s2Heading">Documents require for admission process</h1>
          <h4 className="s2SubHeading">
            - Birth Certificate
            <br />- Aadhar Card <br />- Guardian Identity Proof<br></br>- ID
            Size Photograph
          </h4>
        </div>
        <div className="s2flex2">
          <h2 className="contHeader">Contact for Admission</h2>
          <h4 className="contSubHeadings">Kushkumar Laxman Desai</h4>
          <h4 className="contSubHeadings">
            <a
              href={"tel:+917777555523"}
              style={{ textDecoration: "none", color: "#009688" }}
            >
              Mobile No : +91 9845960490
            </a>
          </h4>
        </div>
      </div>

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
