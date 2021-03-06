import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddJobPage from "./AddJobPage";
import JobsPage from "./JobsPage";
import CandidatesPage from "./CandidatesPage";
import CompaniesPage from "./CompaniesPage";
import SettingsPage from "./SettingsPage";
import Header from "./Header";
const Rout = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  return (
    <div>
      <BrowserRouter>
        <Header firstName={firstName} lastName={lastName} />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ margin: "1% 5%" }}>
                <h1>Welcome to ad platform</h1>
                <div style={{ margin: "3px" }}>
                  <Link to={"/createJob"}>
                    <a>Create Job</a>
                  </Link>
                </div>
                <div style={{ margin: "3px" }}>
                  <Link to={"/jobs"}>
                    <a>Jobs</a>
                  </Link>
                </div>
                <div style={{ margin: "3px" }}>
                  <Link to={"/candidates"}>
                    <a>Candidates</a>
                  </Link>
                </div>
                <div style={{ margin: "3px" }}>
                  <Link to={"/companies"}>
                    <a>Companies</a>
                  </Link>
                </div>
                <div style={{ margin: "3px" }}>
                  <Link to={"/settings"}>
                    <a>Settings</a>
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/createJob" element={<AddJobPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rout;
