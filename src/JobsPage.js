import React, { useEffect, useState } from "react";
import { getJobs } from "./functions";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getJobs()
      .then((data) => {
        setJobs(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ margin: "2% 5%" }}>
      {loading && <h1>Loading...</h1>}
      {jobs.map((elem, index) => (
        <div style={{ border: "1px solid black" }}>
          <h1 style={{ fontSize: "16px" }}>{elem.title}</h1>
          <span style={{ fontSize: "15px" }}>{elem.description}</span>
          <div>
            <span>
              Salary: <b>{elem.salary} $</b>
            </span>
          </div>
          <div>
            <span>
              Employment: <b>{elem.employment} </b>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsPage;
