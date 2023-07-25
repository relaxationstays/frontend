import React from "react";
import { Link } from "react-router-dom";

export default function Location() {
  return (
    <div>
      <div className="container agentsection">
        <div className="parts">
          <div className="row">
            <div className="col">
              <h3>Set Your Listing Location</h3>
              <p>
                You’re not only sharing your space, you’re sharing your
                neighborhood. Travelers will use this information to find a
                place that’s in the right spot.
              </p>
              <hr />
              <h3>Address </h3>
              <p>
                YWhile guests can see approximately where your listing is
                located in search results, your exact address is private and
                will only be shown to guests after they book your listing.
              </p>
              <div align="center">
                <div style={{ height: "30vh", background: "grey" }}></div>
                <br /><label>Add Address</label>
              </div>
              <hr />
              <div className="row">
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/AgentManage/Description">Back</Link>
                </div>
                <div className="col">
                  <div className="btnn" align="right">
                    <Link to="/AgentManage/Amenities">
                      <button>NEXT </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="sidepart">
                <h3>Location</h3>
                Your exact address will only be <br />
                shared with confirmed guests.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
