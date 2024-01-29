import React from "react";
import "./About.css";
// import schoolImg from "./school.jpg";
import schoolImg from "./School-pic.jpg";
import { useEffect } from "react";

export default function About({ setProgress }) {
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);
  return (
    <div>
      <h1 className="abt">About University</h1>
      <div className="abtSchoolData">
        <div className="infrastructureFacilities">
          <img className="schoolImg" src={schoolImg} alt="schoolImage" />
        </div>
        <div className=" btnDiv schoolOverview">
          <h1 style={{ textAlign: "center" }}>Overview</h1>
          <p>
            It was established in 1890 and it is managed by Department of
            Education. It is located in Urban Area. It is located in Great
            Imperial University, Midwestern United States. The University
            consists of Grades from 1 to 7. The university is Co-educational and
            it doesn't have an attached pre-primary section. The university is
            N/A in nature and is not using university building as a
            shift-college. English is the medium of instructions in this
            university. This university is approachable by all weather road. In
            this college academic session starts in April. The university has
            Government building. It has got 17 classrooms for instructional
            purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
