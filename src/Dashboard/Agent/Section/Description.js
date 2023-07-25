import React from "react";
import { Link } from "react-router-dom";

export default function Description() {
  return (
    <div>
      <div className="container agentsection">
        <div className="parts">
          <div className="row">
            <div className="col" style={{ paddingRight: "60px" }}>
              <h3>Tell Travelers About Your Space</h3>
              Every space on Makent is unique. Highlight what makes your listing
              welcoming so that it stands out to guests who want to stay in your
              area.
              <br />
              <br />
              <div className="row">
                <div className="col">Listing Name</div>
                <div className="col" align="right">
                  35 characters left
                </div>
              </div>
              <input
                placeholder="Be clear and descriptive"
                className="Listingname"
              />
              <br />
              <br />
              <div className="row">
                <div className="col">Summary </div>
                <div className="col" align="right">
                  500 characters left
                </div>
              </div>
              <input
                style={{ height: "30vh" }}
                placeholder="Be clear and descriptive"
                className="Listingname"
              />
              <br />
              <br />
              <p>
                You can add more details to tell travelers about your space and
                hosting style.
              </p>
              <div className="row">
                <div className="col">
                  <Link to="/AgentManage/Basics">Back</Link>
                </div>
                <div className="col">
                  <div className="btnn" align="right">
                    <Link to="/AgentManage/Location">
                      <button>NEXT </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="sidepart">
                <h3>Room type</h3>
                <h3>Entire home/apt</h3> Guests will rent the entire place
                <h3> Private room</h3>
                Guests share some spaces <h3>Shared room</h3> Guests don’t have
                a room
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
