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
    <form style={{ margin: "2% 5%" }} onSubmit={onSave}>
      <input
        onChange={(event) => setFirstName(event.target.value)}
        value={firstName}
        placeholder={"First Name"}
      />
      <input
        onChange={(event) => setLastName(event.target.value)}
        value={lastName}
        placeholder={"Last Name"}
      />

      <input
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        placeholder={"email"}
      />
      <button type={"submit"}>Save</button>
    </form>
  );
};

export default SettingsPage;
