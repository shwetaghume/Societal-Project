import React from "react";
import "./About.css";
// import schoolImg from "./school.jpg";
import schoolImg from "./school.jpg";
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
      <h1 className="abt">About School</h1>
      <div className="abtSchoolData">
        <div className="infrastructureFacilities">
          <img className="schoolImg" src={schoolImg} alt="schoolImage" />
        </div>
        <div className=" btnDiv schoolOverview">
          <h1 style={{ textAlign: "center" }}>Overview</h1>
          <p>
            Established on 22nd September 1939, this primary school is situated
            in the serene rural area of the Belgaum district. Over the years,
            the school has become a cornerstone of education in the community,
            fostering a well-rounded learning environment for young minds. It
            celebrates key events such as national days, annual picnics, alumni
            meets, and a vibrant School Opening Day every year. Alongside
            academics, the school actively engages students in co-curricular
            activities, nurturing their holistic development and creating
            cherished memories. Its rich tradition and commitment to excellence
            continue to make it a beacon of learning and growth in the region.
          </p>
        </div>
      </div>
    </div>
  );
}
