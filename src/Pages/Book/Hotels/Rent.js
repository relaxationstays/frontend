import React, { useEffect, useState } from "react";
import "./Rent.css";
import Footer from "../../../Components/Footer/Footer";
import useFetch from "../../../hooks/UseFetch";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Main from "../../../Components/Main/Main";

// import { GiBathtub } from "@react-icons/all-files/fa/";
export default function Rent() {
  const [list, setList] = useState([]);
  const { data } = useFetch(`/hotels`);
  useEffect(() => {
    setList(data);
    console.log("Data", data);
  }, [data]);

  const MapData = data.map((a, b) => (
    <div>
      <Link to={`/Single/${a._id}`}>
        <div className="row tabsLib">
          <div className="col-5 bgimg">
            <div
              className="imgdiv"
              style={{
                backgroundImage: "url(" + a.images[1] + ")",
                backgroundSize: "cover",
                borderRadius: "15px",
              }}
            ></div>
          </div>
          <div className="col">
            {/* <img
              className="smimg"
              src={a.images[1]}
              height="300px"
              width="100%"
            /> */}
            <div className="row">
              <div className="col">
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  {a.name}
                </p>

                <h4>
                  {a.location[0].city} {a.location[0].state} -{" "}
                  {a.location[0].country}
                </h4>
                {a?.rooms?.slice(0, 1).map((itemx) => (
                  <div className=" ">
                    <div>
                      <label className=" ">
                        <ion-icon
                          name="people-outline"
                          style={{ marginLeft: "10px" }}
                        ></ion-icon>{" "}
                        {itemx.capacity} Adults ,{" "}
                        <ion-icon name="moon-outline"></ion-icon> 1 Night
                      </label>
                    </div>
                  </div>
                ))}

                <div>{/* <xGiBathtub /> */}</div>
              </div>
              <div className="col">
                <div className="col">
                  {a?.rooms?.slice(0, 1).map((itemx) => (
                    <div className="pricetag">
                      <div align="right">
                        <label className="linethrou">
                          {itemx.price} AED/NIGHT
                        </label>

                        <label style={{ fontSize: "20px" }}></label>
                        <br />

                        <label style={{ fontSize: "16px", fontWeight: "bold" }}>
                          {" "}
                          <label className=" ">{itemx.price} </label> AED /
                          NIGHT
                        </label>
                        <br />
                        <span style={{ fontSize: "12px" }}>
                          +AED 0 taxes and charges
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="amndiv">
              {a?.rooms?.slice(0, 1).map((itemx) => (
                <span>
                  {" "}
                  {itemx?.amenities?.slice(0, 3).map((amn) => (
                    <label className="amneties">{amn}</label>
                  ))}
                </span>
              ))}
            </div>

            <hr />

            <div className="row lis">
              <div className="col-7">
                {a?.rooms?.slice(0, 1).map((itemx) => (
                  <div
                    style={{
                      borderLeft: "2px solid lightgrey",
                      paddingLeft: "20px",
                    }}
                  >
                    <div className="">
                      <ion-icon name="bed-outline"></ion-icon> {itemx.name}
                    </div>
                    <p style={{ paddingLeft: "10px", color: "green" }}>
                      <li>FREE cancellation</li>
                      <li>No prepayment needed – pay at the property</li>
                    </p>
                  </div>
                ))}
              </div>
              <div className="col" align="right">
                <div className="revi">
                  <span>Excellent</span>
                  <br />
                  678 Reviews<br></br>
                </div>
                <div className="circle" align="center">
                  6.0
                </div>
                <label className="looking">5 people looking for this</label>

                {/* <div className="contacticon" align="right">
                  <ion-icon name="call-outline"></ion-icon>
                  <ion-icon name="mail-unread-outline"></ion-icon>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </div> */}
                <br />
                <button className="booknow">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </Link>
    </div>
  ));
  return (
    <div>
      <Main />

      {/* <div className="topdiv">
        <ul>
          <li className="loc">
            <label>Location</label>
            <input type=" " />
            <ion-icon name="location-outline"></ion-icon>
          </li>
          <li>
            <label>Check In</label>
            <input type="date" />
          </li>
          <li>
            <label>Check Out</label>
            <input type="date" />
          
          </li>
          <li>
            <label>Person</label>
            <input />
            <ion-icon name="people-outline"></ion-icon>
          </li>
        </ul>
      </div> */}
      <div className="container">
        <div>
          Home <label style={{ padding: "10px" }}> &gt;</label> Hotels{" "}
          <label style={{ padding: "10px" }}> &gt;</label> United Arab Emirates
        </div>
        <hr />
        <div className="row">
          <div className="col col-3 side">
            <div>
              <span>Popular filters</span>
              <hr />
              <ul>
                <li>
                  <input type="checkbox" />
                  MMT Exclusive Hotels
                </li>
                <li>
                  <input type="checkbox" />
                  Free Cancellation
                </li>
                <li>
                  <input type="checkbox" />
                  Pay @ Hotel Available
                </li>
                <li>
                  <input type="checkbox" />
                  Breakfast Included
                </li>
                <li>
                  <input type="checkbox" />
                  Breakfast + Lunch/Dinner Included
                </li>
                All Meals Included Staycation Deals
              </ul>
            </div>
            <div>
              <span>Price Range</span>
              <hr />
              <ul>
                <li>
                  <input type="checkbox" />
                  AED 0 - AED 134
                </li>

                <li>
                  <input type="checkbox" />
                  AED 246 - AED 403
                </li>
                <li>
                  <input type="checkbox" />
                  AED 403 - AED 560
                </li>
                <li>
                  <input type="checkbox" />
                  AED 560 - AED 672
                </li>
                <li>
                  <input type="checkbox" />
                  AED 672 - AED 1344
                </li>
                <li>
                  <input type="checkbox" />
                  AED 1344+
                </li>
              </ul>
            </div>
            <div>
              <span>Star Rating</span>
              <hr />
              <ul>
                <li>
                  <input type="checkbox" />
                  4.5 & above (Excellent)
                </li>

                <li>
                  <input type="checkbox" />4 & above (Very Good)
                </li>
                <li>
                  <input type="checkbox" />3 & above (Good)
                </li>
              </ul>
            </div>
            <div>
              <span>Star Rating</span>
              <hr />
              <ul>
                <li>
                  <input type="checkbox" />
                  Apartment
                </li>
                <li>
                  <input type="checkbox" />
                  Resort
                </li>
                <li>
                  <input type="checkbox" />
                  Hostel
                </li>
                <li>
                  <input type="checkbox" />
                  Villa
                </li>
              </ul>
            </div>
            <div>
              <span>Services</span>
              <hr />
              <ul>
                <li>
                  <input type="checkbox" />
                  Television
                </li>
                <li>
                  <input type="checkbox" />
                  No Smoking
                </li>
                <li>
                  <input type="checkbox" />
                  Private Bathroom
                </li>
                <li>
                  <input type="checkbox" />
                  Bike Rental
                </li>
                <li>
                  <input type="checkbox" />
                  Welcome Drink
                </li>
                <li>
                  <input type="checkbox" />
                  Swimming Pool
                </li>
              </ul>
            </div>
            <div>
              <span>Extras</span>
              <hr />
              <ul>
                <li>
                  <input type="checkbox" />
                  Television
                </li>
                <li>
                  <input type="checkbox" />
                  No Smoking
                </li>
                <li>
                  <input type="checkbox" />
                  Private Bathroom
                </li>
                <li>
                  <input type="checkbox" />
                  Bike Rental
                </li>
                <li>
                  <input type="checkbox" />
                  Welcome Drink
                </li>
                <li>
                  <input type="checkbox" />
                  Swimming Pool
                </li>
              </ul>
            </div>
          </div>
          <div className="col ">{MapData}</div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
