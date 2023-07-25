import React from "react";
import "./Confirm.css";
export default function Confirm() {
  return (
    <div style={{ paddingTop: "10vh" }}>
      <div className="container">
        <div className="tabBoards">
          <div className="row">
            <div
              className="col-4
            "
            >
              <div className="tabsesctiom">
                <h3>Your booking details</h3>
                <div className="row">
                  <div className="col">
                    Check in
                    <br />
                    <b>Thu, Jul 20 2023</b>
                    <br />
                    From 3:00 PM
                  </div>
                  <div className="col">
                    Check Out
                    <br />
                    <b>Thu, Jul 20 2023</b>
                    <br />
                    From 3:00 PM
                  </div>
                </div>
                <p>
                  Total length of stay:
                  <br />2 nights
                </p>
                <hr />
                You Selected
                <br />
                <b>Aloft Rooms Guest room, 1 king</b>
                <p>Change your selection</p>
              </div>

              <div className="tabsesctiom" style={{ padding: 0 }}>
                <h3 align="" style={{ paddingLeft: 20 }}>
                  Your price summary
                </h3>

                <div className="bluewish">
                  <br />
                  <div className="row floatcenter">
                    <div className="col-4">
                      <h4>Price</h4>
                    </div>
                    <div className="col">
                      <h5>AED 458 </h5>
                      <p>+AED 147 taxes and charges</p>
                    </div>
                  </div>
                  <br />
                </div>
                <div style={{ padding: "20px" }} className="prisum">
                  <p>
                    Price information
                    <br />
                    <ion-icon name="cash-outline"></ion-icon> Excludes AED
                    146.79 in taxes and charges
                  </p>

                  <ul>
                    <li>5 % VAT</li>
                    <li>AED 25.19</li>
                  </ul>
                  <ul>
                    <li>10 % Property service charge </li>
                    <li>AED 45.80</li>
                  </ul>
                  <ul>
                    <li>Destination fee</li>
                    <li>AED 30</li>
                  </ul>
                  <ul>
                    <li>Municipality fee </li>
                    <li>AED 18.32</li>
                  </ul>
                  <ul>
                    <li>Tourism fee </li>
                    <li>AED 18.32</li>
                  </ul>
                </div>
              </div>
              <div className="tabsesctiom">
                <h3>How much will it cost to cancel?</h3>
                <p>
                  <span style={{ color: "green" }}>
                    Free cancellation until 23:59 on 19 Jul
                  </span>
                  <div className="row">
                    <div className="col">From 00:00 on 20 Jul</div>
                    <div
                      className="col"
                      align="right"
                      style={{ paddingRight: "30px" }}
                    >
                      AED 241.59
                    </div>
                  </div>
                  <br />
                </p>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div
                  className="col"
                  style={{ paddingTop: 15, paddingLeft: 25 }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-vbym6oCvGz-d7ito2XA1tI1xWFpUlfCsg&usqp=CAU"
                    width="100%"
                  />
                </div>
                <div className="col col-8">
                  <br />
                  <div className=" ">
                    <span className="htn">
                      Hotels <ion-icon name="star-outline"></ion-icon>{" "}
                      <ion-icon name="star-outline"></ion-icon>{" "}
                      <ion-icon name="star-outline"></ion-icon>{" "}
                      <ion-icon name="star-outline"></ion-icon>{" "}
                    </span>

                    <p>
                      <label className="htname">
                        Aloft Abu Dhabi <br />
                      </label>
                      Khaleej Al Arabi Street, Abu Dhabi, United Arab Emirates
                      <br />
                      <label className="smallgreen">
                        Great location — 8.6
                        <br />
                        <span style={{ color: "black" }}>
                          Very good · 3,798 reviews
                          <br />{" "}
                          <div className="picon">
                            <label>
                              <ion-icon name="car-sport-outline"></ion-icon>{" "}
                              Parking{" "}
                            </label>
                            <label>
                              <ion-icon name="restaurant-outline"></ion-icon>{" "}
                              Restaurant{" "}
                            </label>
                            <label>
                              <ion-icon name="wifi-outline"></ion-icon> Free
                              WiFi{" "}
                            </label>
                            <label>
                              {" "}
                              <ion-icon name="water-outline"></ion-icon>{" "}
                              Swimming Pool{" "}
                            </label>
                          </div>
                        </span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>

              <div className="tabsesctiom" style={{paddingBottom:8}}>
                <p>
                  Sign in to book with your saved details or register to manage
                  your bookings on the go!
                </p>
               
              </div>

              <div className="tabsesctiom">
                <h5 style={{ fontWeight: "bold" }}>Enter your details</h5>

                <div>Almost done! Just fill in the * required info</div>
                <div>
                  <h3>Are you travelling for work?</h3>
                  <input
                    type="radio"
                    style={{ marginRight: 10 }}
                    // style={{ height: 20, width: 20, marginRight: 10 }}
                  />
                  Yes
                  <input
                    type="radio"
                    style={{ marginRight: 10, marginLeft: 10 }}
                  />
                  No
                  <div className="row">
                    <div className="col">
                      <h3 style={{ padding: 0, margin: 0, marginBottom: 10 }}>
                        First name *
                      </h3>
                      <input style={{ width: "80%", height: 40 }} />
                    </div>
                    <div className="col">
                      <h3 style={{ padding: 0, margin: 0, marginBottom: 10 }}>
                        Last name *
                      </h3>
                      <input style={{ width: "80%", height: 40 }} />
                    </div>
                  </div>
                  <div>
                    <br />
                    <h3 style={{ padding: 0, margin: 0, marginBottom: 10 }}>
                      Email address *
                    </h3>

                    <div>
                      <input style={{ width: "60%", height: 40 }} />
                      <p>Confirmation email goes to this address</p>
                      <h3>Who are you booking for?</h3>
                      <input type="radio" style={{ marginRight: 15 }} /> I am
                      the main guest <br />
                      <input type="radio" style={{ marginRight: 15 }} />
                      Booking is for someone else
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <div className="tabsesctiom checki_">
                <h5 style={{ fontWeight: "bold" }}>Good to know</h5>
                <p style={{ paddingLeft: "20px" }}>
                  <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                  Stay flexible: You can cancel for free until 20 July 2023, so
                  lock in this great price today.
                </p>
              </div>
              <div className="tabsesctiom checki_">
                <p>
                  <h3>Aloft Room, Guest room, 1 King</h3>
                  <div>Free cancellation until 23:59 on 19 July 2023</div>

                  <div style={{ paddingLeft: "15px", margin: 10 }}>
                    {" "}
                    <ion-icon name="people-outline"></ion-icon>Guests: 2 adults
                  </div>

                  <div style={{ paddingLeft: "15px", margin: 10 }}>
                    <ion-icon name="bonfire-outline"></ion-icon> Exceptionally
                    clean rooms - 8.8
                  </div>
                  <div style={{ paddingLeft: "15px", margin: 10 }}>
                    <ion-icon name="star-half-outline"></ion-icon> No smoking
                  </div>
                  <br />
                  <div className="col">
                    <h3 style={{ padding: 0, margin: 0, marginBottom: 10 }}>
                      Full Guest Name
                    </h3>

                    <input style={{ width: "60%", height: 40 }} />
                  </div>
                  <br />
                </p>
              </div>

              <div className="tabsesctiom checki_">
                <h3>Add to your stay</h3>
                <ul>
                  <li className="txbx">
                    <input type="checkbox" />
                  </li>
                  <li>
                    I'm interested in renting a car Make the most out of your
                    trip and check car hire options in your booking
                    confirmation.
                  </li>
                </ul>
                <br />
              </div>
              <div className="tabsesctiom checki_">
                <h3>Special requests</h3>
                Special requests cannot be guaranteed – but the property will do
                its best to meet your needs. You can always make a special
                request after your booking is complete!
                <p>
                  Please write your requests in English or Arabic. (optional)
                </p>
                <textarea />
                <br />
                <br />
                <p>
                  <ul>
                    <li className="txbx">
                      <input type="checkbox" />
                    </li>
                    <li>I would like free private parking on site</li>
                  </ul>
                </p>
                <br />
              </div>
              <div className="tabsesctiom checki_">
                <div style={{ paddingLeft: "15px", margin: 10 }}>
                  <ion-icon name="bed-outline"></ion-icon>
                  Your arrival time Your room will be ready for check-in at
                  15:00
                  <br />
                  <ion-icon name="bed-outline"></ion-icon>
                  24-hour front desk – Help whenever you need it! <br /> <br />
                </div>
                <div>
                  Add your estimated arrival time *<br />
                  <input style={{ width: "60%", height: 40 }} />
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="nextfinal" align="right">
          <button className="btn btn-primary">NEXT : FINAL STEPS</button>
        </div>
      </div>
    </div>
  );
}
