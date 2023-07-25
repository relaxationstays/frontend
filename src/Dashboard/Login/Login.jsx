import React, { useContext, useState } from "react";
import { loginInputs } from "../../formSource";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.role == "isClient") {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/Dashboard");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      // console.log("Error", err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  
  return (
    <div>
      <div className="mainpage">
        <div className="datax">
          <h3>Login</h3>
          {/* {DataForm} */}
          <div>
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          <p>{error && <span>{error.message}</span>}</p>

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
};
export default Login;
