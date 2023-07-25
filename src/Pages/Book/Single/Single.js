import React, { useEffect, useState } from "react";
import "./Single.css";
import Avaliable from "../../../Components/Services/Avaliable";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";
import { Skeleton } from "@mui/material";
// import { Skeleton } from "antd";

export default function Single() {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(0);
  const [room, setRoom] = useState("");
  const [idroom, setId] = useState(0);
  const { data } = useFetch(`/hotels/single/${id}`);
  const navigate = useNavigate();

  const Booknow = () => {
    const datax = [
      {
        price: price,
        roomid: idroom,
      },
    ];
    localStorage.setItem("Book", datax);
    navigate("/Confirm");
    // console.log("Datac", datax);
  };

  useEffect(() => {
    let arr = [];
    arr.push(data);
    setList(arr);
    // console.log("Data", list);
  }, [data]);
  const ViewStat = list.map((a, b) => (
    <div>
      <div className="">
        <div className="mainImg">
          <div className="row">
            <div className="col ">
              <div>
                {a?.location?.map((item) => (
                  <label>
                    <ion-icon name="location-outline"></ion-icon>

                    <div className="tabs_">
                      {item.city} {item.state} | {item.country}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="col pages" align="right">
              <label>
                <ion-icon name="share-outline"></ion-icon> Share
              </label>
              <label>
                <ion-icon name="heart-outline"></ion-icon> Save
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col col-7">
              <h2>{a.name}</h2>
            </div>
            <div className="col "></div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {a?.images?.slice(0, 1).map((item) => (
              <div className="imgTabX">
                <img src={item} />
              </div>
            ))}
          </div>
          <div className="col">
            <div className="row downsection">
              {a?.images?.map((item) => (
                <div className="col col-6 ">
                  <div className="imgtry">
                    <img src={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <h4>Entire rental unit hosted by Azaliya</h4>
            <div className="categories">
              <ul>
                <li>2 guests</li>
                <li>1 bedroom</li>
                <li>1 bed</li>
                <li>1 bath</li>
              </ul>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <ul className="fixedto">
          <li>
            <div className="datainput">
              <hr />
              <label style={{ fontWeight: "bold" }}>Avaliability</label>
              <div className=" avaliability">
                {a?.rooms?.map((item, i) => (
                  <div
                    className="row rowdb"
                    style={
                      i % 2 == 0
                        ? { background: "lightgrey" }
                        : { background: "none" }
                    }
                  >
                    <div className="col col-2">
                      <img src={item.images[0]} width={130} />
                    </div>
                    <div className="col col-2">
                      <label>{item.name}</label>
                    </div>
                    <div className="col col-6 amdatacol">
                      <div>
                        {item?.amenities?.map((ab) => (
                          <label style={{ paddingRight: "10px" }}>
                            <b>{ab}</b> |
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="col col-2" align="right">
                      {item.price}{" "}
                      <input
                        type="checkbox"
                        onClick={() => {
                          setPrice(item.price);
                          setRoom(item.name);
                          setId(item._id);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <hr />
              <div className="tab">
                <ion-icon name="albums-outline"></ion-icon>
                <b>Self check-in</b>
                <br />
                Check yourself in with the keypad.
              </div>
              <div className="tab">
                <ion-icon name="podium-outline"></ion-icon>
                <b>Azaliya is a Superhost</b>
                <br />
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </div>
              <div className="tab">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                <b>Great location</b>
                <br />
                100% of recent guests gave the location a 5-star rating.
              </div>
              <hr />
              <div className="fixedDiv">
                <div align="center">
                  <b>{room}</b>
                </div>
                <div className="row">
                  <div className="col">
                    <h4>{price} AED / Night</h4>
                  </div>
                  <div className="col" align="right">
                    <div>
                      <ion-icon name="star-outline"></ion-icon> 4.94 Reviews
                    </div>
                  </div>
                </div>
                <div align="center">
                  <div className="row">
                    <div className="col">
                      <label>CHECK IN</label>
                      <br />
                      12th - July - 2023
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "1px solid grey" }}
                    >
                      <label>CHECK IN</label>
                      <br />
                      13th - July - 2023
                    </div>
                  </div>
                  <hr />
                  Room :<ion-icon name="bed-outline"></ion-icon> 1 Room -{" "}
                  <ion-icon name="people-outline"></ion-icon> 2 Adults
                  <button className="btn btn-success" onClick={() => Booknow()}>
                    BOOK NOW
                  </button>
                </div>
              </div>

              <div>
                <p>
                  Stay at the heart of Dubai,7 minutes away from JBR(Jumeirah
                  Beach). The property is located right in front of a famous
                  Marina Walk, a 7 km waterfront walkway, which has a nice
                  walking experience with plenty of cafes and restaurants
                  around.
                </p>
                ........
                <br />
                <b>Show more</b>
                <br />
                <br />
                <br />
                <hr />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14528.998088294022!2d54.423282!3d24.4421268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e663e8ac1e1d1%3A0x3e9c3539e8379f12!2sRoyal%20Embassy%20of%20Thailand!5e0!3m2!1sen!2sae!4v1687687441784!5m2!1sen!2sae"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </li>
          <li className="hipa">
            <div id="thing_to_stick">
              <div className="row">
                <div className="col">
                  <h4>{price} AED / Night</h4>
                </div>
                <div className="col" align="right">
                  <div>
                    <ion-icon name="star-outline"></ion-icon> 4.94 Reviews
                  </div>
                </div>
              </div>
              <div align="center">
                <div className="row">
                  <div className="col">
                    <label>CHECK IN</label>
                    <br />
                    12th - July - 2023
                  </div>
                  <div className="col" style={{ borderLeft: "1px solid grey" }}>
                    <label>CHECK IN</label>
                    <br />
                    13th - July - 2023
                  </div>
                </div>
                <hr />
                Room
                <br />
                {room} <br /> <ion-icon name="bed-outline"></ion-icon> 1 Room -{" "}
                <ion-icon name="people-outline"></ion-icon> 2 Adults
                <button className="btn btn-success" onClick={() => Booknow()}>
                  BOOK NOW
                </button>
              </div>
            </div>
          </li>
        </ul>

        <div></div>
        {/* <Avaliable /> */}
      </div>
    </div>
  ));
  return (
    <div>
      <div className="container">
        {list.length > 0 ? (
          ViewStat
        ) : (
          <div>
            <div className="row">
              <div className="col-8">
                <Skeleton
                  variant="rectangular"
                  width={850}
                  height={150}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={850}
                  height={400}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={850}
                  height={120}
                  style={{ marginBottom: "2px" }}
                />
              </div>
              <div className="col">
                <Skeleton
                  variant="rectangular"
                  width={400}
                  height={200}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={400}
                  height={200}
                  style={{ marginBottom: "2px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={400}
                  height={200}
                  style={{ marginBottom: "2px" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
