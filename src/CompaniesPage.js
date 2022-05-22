import React, { useEffect, useState } from "react";
import { getCandidates, getCompanies } from "./functions";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getCompanies().then((data) => setCompanies(data));
  }, []);
  return (
    <div style={{ margin: "2% 5%" }}>
      {companies.map((elem, index) => (
        <div style={{ border: "1px solid black" }}>
          <h1 style={{ fontSize: "16px" }}>{elem.name}</h1>
          <span style={{ fontSize: "15px" }}>{elem.description}</span>
        </div>
      ))}
    </div>
  );
};

export default CompaniesPage;
