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
          <div className="col col-5">
            <Link to="/">LOGO</Link>
          </div>

          <div className="col tabs" align="right">
            <div style={{ background: " " }}>
              <label>
                <ion-icon name="call-outline"></ion-icon> 800 1234 / +971
                43561122
              </label>
              <label>AED</label>
              <label>UAE</label>
              <label>
                <ion-icon name="people-outline"></ion-icon> Register / Login
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
