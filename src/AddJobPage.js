import React, { useState } from "react";
import { postJob } from "./functions";

const AddJobPage = () => {
  const [description, setDescription] = useState("");
  const [employment, setEmployment] = useState("");
  const [salary, setSalary] = useState(0);
  const [title, setTitle] = useState("");

  const onCreate = () => {
    if (!description || !employment || !salary || !title) return;
    postJob({ description, employment, salary, title });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3% 2%" }}>
      <div style={{ margin: "5px" }}>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          placeholder={"Title"}
        />
      </div>
      <div style={{ margin: "5px" }}>
        <textarea
          placeholder={"Description"}
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
      </div>
      <div style={{ margin: "5px" }}>
        <input
          placeholder={"Employment"}
          onChange={(event) => setEmployment(event.target.value)}
          value={employment}
        />
      </div>
      <div style={{ margin: "5px" }}>
        <input
          placeholder={"Salary"}
          type={"number"}
          onChange={(event) => setSalary(event.target.value)}
          value={salary}
        />
      </div>
      <div style={{ margin: "5px" }}>
        <button onClick={() => onCreate()}>Create</button>
      </div>
    </div>
  );
};

export default AddJobPage;
