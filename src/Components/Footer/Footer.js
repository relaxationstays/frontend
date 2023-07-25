import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="_Footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
               Your Dream <br />
                Vacation starts here
              </h1>
              <p>
               Discover a world of elegance and relaxation
              </p>

              <div className="inputdata">
                <input />
                <button>SUBSCRIBE</button>
              </div>
              <p>
                By signing up you agree to our Terms of Use and privacy policy,
                including the use of cookies and transfer of your personal
                information.
              </p>
            </div>
            <div className="col datafooter">
              <h4>Sections</h4>
              <label>Home</label>
              <label>Rent</label>
              <label>Contact Us</label>
            </div>
            <div className="col datafooter">
              <h4>Services</h4>
              <label>Apartment</label>
              <label>Hotels</label>
              <label>Commercial Mortgage</label>
              <label>Holiday Homes</label>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ fontWeight: "bold" }}>
            Relaxationstays Rights.
            </div>
            <div className="col-6" align="center">
              © 2023 Relaxationstays. All Rights Reserved. Privacy Policy.
            </div>
            <div className="col">
              {" "}
              <div className="_ions" align="right">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="location-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
