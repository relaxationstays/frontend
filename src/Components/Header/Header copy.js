import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user } = useContext(AuthContext);
  console.log("user", user);

  return (
    <div className="header">
      <div className="container">
        <div className="row updatax">
          <div className="col col-3">
            <Link to="/">LOGO</Link>
          </div>
          <div
            className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 col-4"
            style={{ background: "" }}
          >
            <ul>
              <li>
                <Link to="/Hotels">Hotels</Link>
              </li>
              <li>Manage</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div
            className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 uldas"
            align=""
          >
            {!user ? (
              <div style={{ width: "100%" }}>
                <Link to="/Dashboard/Register">
                  <button>Register</button>
                </Link>
                <Link to="/Dashboard/Login">
                  <button>Login</button>
                </Link>
              </div>
            ) : (
              <ul>
                <li style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                  <Link to="/Dashboard">
                    <span>{user.fullName}</span>
                    <span style={{ marginLeft: "5px" }}>{user.lastName}</span>
                  </Link>
                </li>
                <li align="center">
                  <div className=" ">
                    <ion-icon name="person-outline"></ion-icon>
                    Log Out
                    <ion-icon name="menu-outline"></ion-icon>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
