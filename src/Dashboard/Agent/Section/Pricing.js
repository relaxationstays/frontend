import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div>
      <div className="container agentsection">
        <div className="parts">
          <div className="row">
            <div className="col">
              <h3>Set a Nightly Price for Your Space </h3>
              <p>
                You can set a price to reflect the space, amenities, and
                hospitality you’ll be providing. .
              </p>
              <hr />
              <h3>Base price </h3>
              <p>Nightly Price </p>
              <input />
              <br/>
              <br/>
              <p>Currency </p>
              <input />

              <hr />
              <h3>Additional Pricing Options </h3>
              <ul class="amenity-list">
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="1"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Cleaning fee</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="2"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Additional guests</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="3"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Security deposit</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="4"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Weekend pricing </span>
                  </label>
                </li>
              </ul>
              <div className="row">
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/AgentManage/Video">Back</Link>
                </div>
                <div className="col">
                  <div className="btnn" align="right">
                    <Link to="/AgentManage/Calender">
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
