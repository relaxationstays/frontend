import React from "react";
import "./Intouch.css";

export default function Intouch() {
  return (
    <div className="tt">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ border: "none" }}>
            <h3>Looking for help?</h3>
            Our team is available 24/7
            <hr />
          </div>
          <div className="col">
            <ion-icon name="call-outline"></ion-icon>
            <label>Call us:</label>
            <br />
            <span>8000903086</span>
          </div>
          <div className="col">
            <ion-icon name="mail-unread-outline"></ion-icon>
            <label>Or you can email us:</label>
            <br />
            <span>support@relaxationstays.com</span>
          </div>
          <div className="col">
            <ion-icon name="logo-whatsapp"></ion-icon>
            <label>Get support via WhatsApp:</label>
            <br />
            <span>+971 50 244 6693</span>
          </div>
        </div>
      </div>
    </div>
  );
}
