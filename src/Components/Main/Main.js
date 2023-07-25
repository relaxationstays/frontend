import "./Main.css";
import { DatePicker, Space } from "antd";
import React, { useLayoutEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const { RangePicker } = DatePicker;

export default function Main(props) {
  const [categories, setCate] = useState([
    "Studio",
    "1Bedroom",
    "2Bedroom",
    "Villa",
    "Boats",
    "Transfers",
    "More",
  ]);
  const div = useRef();

  useLayoutEffect(() => {
    console.log(div);
    const divAnimate = div.current.getBoundingClientRect().top;
    console.log(divAnimate);
    const onScroll = () => {
      if (divAnimate < window.scrollY) {
        console.log("ok");
        div.current.style.position = "fixed";
        div.current.style.top = "-23vh";
        div.current.style.left = 0;
        div.current.style.background = "none";
        div.current.style.width = "100%";
        div.current.style.zIndex = "120";
        div.current.style.paddingBottom = "20px";
      } else {
        div.current.style.position = "relative";
        div.current.style.background = "none";
        div.current.style.width = "80%";
        div.current.style.top = "0";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const mapCate = categories.map((items) => (
    <li align="center" >
      <div>
        <ion-icon name="home-outline"></ion-icon>
        <br /> {items}
      </div>
    </li>
  ));

  return (
    <div>
      <div className="main">
        <div align="center" className="datamain" ref={div}>
          <h2>Find where to stay</h2>
          <div className="listoption">
            <ul>
              {mapCate}
              {/* <li align="center">
                <div>
                  <ion-icon name="home-outline"></ion-icon> <br />
                  Home
                </div>
              </li>
              <li align="center">
                <div>
                  <a href="/Hotels">
                    <ion-icon name="home-outline"></ion-icon> <br /> Rooms
                  </a>
                </div>
              </li>
              <li align="center">
                <div>
                  <ion-icon name="home-outline"></ion-icon>
                  <br /> Tours
                </div>
              </li> */}
            </ul>
          </div>
          <div className="inputboxMain">
            <h3 className="uptip">Book your desired cozy stay room</h3>
            <hr />
            <ul>
              <li className="box" align="left" style={{ flex: 1.5 }}>
                <p>ENTER YOUR DESTINATION</p>
                <label>DIERA DUBAI</label>
                <br />
                <span>United Arad Emirates</span>
                <ion-icon
                  className="loc"
                  name="navigate-outline"
                  style={{
                    position: "absolute",
                    marginLeft: " 45px",
                    marginTop: "-20px",
                    fontSize: "30px",
                    color: "lightgrey",
                  }}
                ></ion-icon>
              </li>
              <li align="left" style={{ flex: 2 }}>
                <div className="row">
                  <div className="col">
                    <p>
                      <ion-icon name="calendar-outline"></ion-icon> CHECK IN
                    </p>
                    <label style={{ fontSize: "16px" }}>
                      <span style={{ fontSize: "25px" }}>14</span> Jul 23
                    </label>
                    <br />
                    <span style={{ paddingLeft: "20px" }}>Friday</span>
                  </div>

                  <div
                    className="col-2"
                    align="center"
                    style={{ fontSize: "15px" }}
                  >
                    <label className="bgtime" style={{ fontSize: "15px" }}>
                      5
                    </label>{" "}
                    Nights
                  </div>

                  <div className="col">
                    <p>
                      <ion-icon name="calendar-outline"></ion-icon> CHECK OUT
                    </p>
                    <label style={{ fontSize: "16px" }}>
                      <span style={{ fontSize: "25px" }}>14</span> Jul 23
                    </label>
                    <br />
                    <span style={{ paddingLeft: "20px" }}>Friday</span>
                  </div>
                </div>
              </li>
              <li align="left">
                <p>
                  <p>
                    <ion-icon name="people-outline"></ion-icon> ROOMS & GUESTS
                  </p>
                </p>
                <label style={{ fontSize: "15px" }}>
                  <span style={{ fontSize: "20px" }}>1</span> Room
                  <br />
                  <span style={{ fontSize: "20px" }}>3</span> Guests
                </label>
                <br />
              </li>
              <li>
                <input />
                <Link to="/hotels">
                  <button className="btnx">SEARCH</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
