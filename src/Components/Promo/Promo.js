import React, { useState } from "react";
import "./Promo.css";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
export default function Promo(props) {
  const [country, setCountry] = useState([
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ras khaimah",
  ]);
  const [listTab, setList] = useState([
    { name: "Beach", price: "150", images: "/img/beach.jpg" },
    { name: "Nature", price: "150", images: "/img/nature.jpg" },
    { name: "Family Friendly", price: "150", images: "/img/studio.jpg" },
    { name: "Romantic", price: "150", images: "/img/rom.jpg" },
    { name: "Summer Special", price: "150", images: "/img/summ.jpg" },
    { name: "Culture", price: "150", images: "/img/cult.jpg" },
  ]);
  const IvPage = props.dataraay.slice(0, 5).map((a, b) => (
    <li>
      <div
        className="imagesidePromo"
        style={{
          backgroundImage: "url(" + a.images[2] + ")",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="promteam">
        <label style={{ color: "white", fontWeight: "bold" }}>
          <div className="nomilist" style={{ color: "" }}>
            12 Properties
          </div>
        </label>
        <br />
        <button>Book now</button>
      </div>
    </li>
  ));
  const imgTab = listTab.map((a, b) => (
    <li>
      <div
        className="row special"
        style={{ height: "156px", backgroundImag: "", borderRadius: 10 }}
      >
        <div className=" col col-6">
          <div className=" ">
            <img src={a.images} className="specialimgtab" />
          </div>
        </div>
        <div className="col hotelTabName">
          <div style={{ paddingLeft: 20 }}>
            <h5>{a.name}</h5>
            <span>
              Starting from
              <br /> <span className="stspecial">AED {a.price}</span>
            </span>
          </div>
        </div>
      </div>
    </li>
  ));
  const HotelPage = props.dataraay.slice(0, 8).map((a, b) => (
    <li>
      <div className="bor">
        <Link to={`/Single/${a._id}`}>
          <div className="imagetabR">
            <img src={a.images[1]} className="" />
          </div>
          <div className="htt">
            <p style={{ textTransform: "capitalize" }}> {a.name}</p>

            <label>
              <ion-icon name="location-outline"></ion-icon>
              <label style={{ color: "white", fontWeight: "bold" }}>
                <div className="nomilist" style={{ color: "black" }}>
                  {a.location[0].city} {a.location[0].state} |{" "}
                  {a.location[0].country}
                </div>
              </label>
            </label>
            <br />

            <div className="float">

              
              {/* <p style={{ color: "black" }}>1 rooms - 2 Adults</p> */}
              <p style={{ color: "black" }}>
              <span className="linethro">AED 120  </span>  
                <br />
              1 Night / AED 100  
              </p>
            </div>
          </div>
        </Link>
      </div>
    </li>
  ));
  return (
    <div>
      <div className="container">
        <br />
        <h2>Popular Places</h2>
        {props.dataraay.length < 1 ? (
          <ul className="promotabs">
            <li>
              <Skeleton
                variant="rectangular"
                width={250}
                height={100}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={20}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={30}
                style={{ marginBottom: "2px" }}
              />
            </li>
            <li style={{ marginLeft: "30px" }}>
              <Skeleton
                variant="rectangular"
                width={250}
                height={100}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={20}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={30}
                style={{ marginBottom: "2px" }}
              />
            </li>
            <li style={{ marginLeft: "30px" }}>
              <Skeleton
                variant="rectangular"
                width={250}
                height={100}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={20}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={30}
                style={{ marginBottom: "2px" }}
              />
            </li>
            <li style={{ marginLeft: "30px" }}>
              <Skeleton
                variant="rectangular"
                width={250}
                height={100}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={20}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={30}
                style={{ marginBottom: "2px" }}
              />
            </li>
          </ul>
        ) : (
          <ul className="promotabs">{IvPage}</ul>
        )}

        <br />
      </div>
      <div className="container">
        <br />

        <div style={{ height: "20vh " }} className="bann"></div>
        <br />

        <div className="row">
          {/* <Skeleton variant="rectangular" width={210} height={60} /> */}
          <div className="col">
            {" "}
            <h2>Discounted Rooms</h2>
          </div>
          <div className="col" align="right" style={{ marginRight: "7%" }}>
            View all
          </div>
        </div>

        <p></p>
        <ul className="promoHotel">
          {props.dataraay.length < 1 ? (
            <>
              <li>
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={100}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={150}
                  height={20}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={30}
                  style={{ marginBottom: "2px" }}
                />
              </li>
              <li>
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={100}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={150}
                  height={20}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={30}
                  style={{ marginBottom: "2px" }}
                />
              </li>
              <li>
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={100}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={150}
                  height={20}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={30}
                  style={{ marginBottom: "2px" }}
                />
              </li>
              <li>
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={100}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={150}
                  height={20}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={30}
                  style={{ marginBottom: "2px" }}
                />
              </li>
            </>
          ) : (
            HotelPage
          )}
        </ul>

        <div>
          <h2>Properties By Category</h2>

          <div className="row biggerBg">
            <div className="col co tt tit">
              <h3>Studio Room</h3>

              {/* <img src="/img/sp/studio.jpg"/> */}
            </div>
            <div className="col" style={{ padding: 0, margin: 0 }}>
              <div className="tabtt co tit1" style={{ marginBottom: 10 }}>
                <h3>1bed Room</h3>
              </div>

              <div className="tabtt co tit2">
                <h3>Family House</h3>
              </div>
            </div>
            <div className="col co  tit3">
              <h3>Villa</h3>
            </div>
          </div>
        </div>
        <br />

        <br />

        <div style={{ height: "30vh " }} className="bann2"></div>
        <br />
        <br />

        <div style={{ background: "" }}>
          <h2>Special Offers</h2>
          <div className="tabspecial">
            <ul>{imgTab} </ul>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
