import React, { useState } from "react";

const SettingsPage = () => {
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const onSave = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
  };

  return (
    <form
      style={{ margin: "2% 15%", display: "flex", flexDirection: "column" }}
      onSubmit={onSave}
    >
      <h3>Settings</h3>
      <div style={{ marginTop: "10px" }}>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
          placeholder={"First Name"}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
          placeholder={"Last Name"}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder={"email"}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button type={"submit"}>Save</button>
      </div>
    </form>
  );
};

export default SettingsPage;
