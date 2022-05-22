import React from "react";
import "./header.css";

const Header = ({ firstName, lastName }) => {
  return (
    <header className={"header"}>
      <div className={"fullname"}>
        {firstName && lastName ? (
          <>
            <span>{firstName} </span>
            <span>{lastName} </span>
          </>
        ) : (
          <span>Guest</span>
        )}
      </div>
    </header>
  );
};

export default Header;
