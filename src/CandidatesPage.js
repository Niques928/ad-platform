import React, { useEffect, useState } from "react";
import { getCandidates } from "./functions";

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    getCandidates().then((data) => setCandidates(data));
  }, []);
  return (
    <div style={{ margin: "2% 5%" }}>
      {candidates.map((elem, index) => (
        <div style={{ border: "1px solid black" }}>
          <h1 style={{ fontSize: "16px" }}>{elem.fullname}</h1>
          <span style={{ fontSize: "15px" }}>{elem.description}</span>
          <div>
            <span>
              Salary: <b>{elem.salary} $/hr</b>
            </span>
          </div>
          <div>
            <span>
              Speciality: <b>{elem.speciality} </b>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidatesPage;
