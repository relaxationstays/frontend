import React, { useState } from "react";
import "./Agent.css";
import { Link } from "react-router-dom";
import AutoComplete from "../../Pages/Book/Google/Google";

export default function Agent() {
  const [active, setActive] = useState(1);
  return (
    <div className="container">
      <div style={active == 1 ? { display: "show" } : { display: "none" }}>
        <div className="" align="center">
          <h3>Become a Host</h3>
          <p>Makent lets you make money renting out your place.</p>
        </div>
        <div className="ht" style={{ width: "70%" }}>
          <h5>Home Type</h5>
          <div className="hometypes">
            <ul>
              <li>Apartment</li>
              <li>Home</li>
              <li>Bed and brekfast</li>
              <li>
                Others <ion-icon name="caret-down-outline"></ion-icon>
              </li>
            </ul>
          </div>
          <h5>Room Type</h5>
          <div className="hometypes">
            <ul>
              <li>Entire Apartment</li>
              <li>Shared Rooms</li>
              <li>Private Room</li>
              <li>
                Others <ion-icon name="caret-down-outline"></ion-icon>
              </li>
            </ul>
          </div>
          <AutoComplete />

          <h5>Accommodates </h5>
          <div className="hometypes">
            <select>
              <option>Select Options</option>
              <option defaultValue={1}>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
            <br />
            <Link to="/AgentManage/Basics">
              <button className="btn btn-danger">Continue </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
