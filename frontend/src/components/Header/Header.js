import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ isLoggedIn, loggingOut }) {
  const loggedInLinks = { text: "Logout", path: "/login" };
  const loggedOutLinks = { text: "Login", path: "/login" };
  let currentStatus = loggedOutLinks;

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  if (isLoggedIn === true) {
    currentStatus = loggedInLinks;
  }
  return (
    <div className="header" key="header">
      <div>
          <Link
            to={currentStatus.path}
            style={linkStyle}
            className="link"
            onClick={() => {
              if (currentStatus.text === "Logout") {
                loggingOut();
              }
            }}
          >
            {currentStatus.text}
          </Link>
      </div>
    </div>
  );
}
