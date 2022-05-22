import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ firstName, lastName }) => {
  let navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
  };

  return (
    <header className={"header"}>
      <span className={"brandName"} onClick={() => redirectHome()}>
        Ad platform
      </span>
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
