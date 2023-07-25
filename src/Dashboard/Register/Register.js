import React from "react";
import { Link } from "react-router-dom";
import { registerInputs } from "../../formSource";

export default function Register() {
  const DataForm = registerInputs.map((a, b) => (
    <div>
      <label className="datatext">{a.label}</label>
      <input type={a.type} />
    </div>
  ));
  return (
    <div>
      <div className="mainpage">
        <div className="datax">
          <h3>Register</h3>
          {DataForm}

          <Link>
            <p>Forgot password?</p>
          </Link>

          <p>
            Don't have an account? <Link to="/Dashboard/Register">Sign up</Link>{" "}
          </p>
          <p>Or log in with:</p>

          <div className="ionsocial">
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-google"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
