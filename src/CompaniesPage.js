import React, { useEffect, useState } from "react";
import { getCandidates, getCompanies } from "./functions";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCompanies()
      .then((data) => setCompanies(data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div style={{ margin: "2% 5%" }}>
      {loading && <h1>Loading...</h1>}
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
