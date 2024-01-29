import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../Firebase-config";
// import "./Gallary.css";
import "./Faculty.css";

const ReadFacultyComponent = ({ setProgress }) => {
  useEffect(() => {
    setProgress(25);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    const facultyRef = ref(getDatabase(app), "faculty");

    const fetchData = () => {
      onValue(facultyRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const facultyData = Object.values(data).filter(
            (faculty) => !faculty.deleted
          );
          setFacultyList(facultyData);
        }
      });
    };

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div>
      <div className="Gallary">
        <h1>School Faculty Members</h1>
      </div>
      <div className="parent-Gallary">
        {facultyList.map((faculty) => (
          <div className="childd-Gallary" key={faculty.facultyId}>
            <div className="card">
              <img
                src={faculty.imageUrl}
                alt={faculty.facultyName}
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-title">{faculty.facultyName}</h2>
                <p className="card-description">{faculty.facultyDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadFacultyComponent;
