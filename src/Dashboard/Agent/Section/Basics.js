import { grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
 

export default function Basics() {
  return (
    <div className="container agentsection">
      <div className="parts">
        <div className="row">
          <div className="col">
            <h3>Help Travelers Find the Right Fit</h3>
            People searching on Makent can filter by listing basics to find a
            space that matches their needs.
            <h3>Rooms and Beds</h3>
            <div className="row">
              <div className="col">Bedrooms</div>
              <div className="col-3 particon">
                <ion-icon name="add-circle-outline"></ion-icon>
                <label>0</label>
                <ion-icon name="add-circle-outline"></ion-icon>
              </div>
            </div>
            <h3>Sleeping arrangements</h3>
            <div className="row centerTabs" style={{ background: " " }}>
              <div className="col" style={{ padding: "10px" }}>
                <label>Common Space</label>{" "}
              </div>
              <div className="col col-3  addbeds">
                <button>ADD BEDS </button>
              </div>
            </div>
            <hr />
            <div>
              <h3>Rooms and Beds</h3>
              <div className="row withradio">
                <div className="col">Bedrooms</div>
                <div className="col-3 particon">
                  <ion-icon name="add-circle-outline"></ion-icon>
                  <label>0</label>
                  <ion-icon name="add-circle-outline"></ion-icon>
                </div>
              </div>
              <h3>Are any of the bathrooms private ?</h3>
              <div>
                <input type="radio" /> Yes
              </div>
              <div>
                <input type="radio" /> No,they're shared
              </div>
            </div>
            <hr />
            <div>
              <h3>Listing</h3>

              <div className="row selectRooms">
                <div className="col">
                  <p>Property Type</p>

                  <select>
                    <option value="1">Apartment</option>
                    <option value="2" selected="selected">
                      House
                    </option>
                    <option value="3">Bed &amp; Break Fast</option>
                    <option value="4">Loft</option>
                    <option value="5">Townhouse</option>
                    <option value="6">Condominium</option>
                    <option value="7">Bungalow</option>
                    <option value="8">Cabin</option>
                    <option value="9">Villa</option>
                    <option value="10">Castle</option>
                    <option value="11">Dorm</option>
                    <option value="12">Treehouse</option>
                    <option value="13">Boat</option>
                    <option value="14">Plane</option>
                    <option value="15">Camper/RV</option>
                    <option value="16">Lgloo</option>
                    <option value="17">Lighthouse</option>
                  </select>
                </div>
                <div className="col">
                  <p>Room Type</p>
                  <select>
                    <option value="1">Shared Room</option>
                    <option value="2" selected="selected">
                      House
                    </option>
                    <option value="3">Private Room</option>
                  </select>
                </div>
                <div className="col">
                  <p>Accommodates</p>
                  <select>
                    <option value="2" selected="selected">
                      1
                    </option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <br />

              <div className="btnn" align="right">
                <div className="row">
                  <div className="col" align="left">
                    <Link to="/Agent ">Back</Link>
                  </div>
                  <div className="col">
                    <div className="btnn" align="right">
                      <Link to="/AgentManage/Description">
                        <button>NEXT </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="sidepart">
              <h3>Room type</h3>
              <h3>Entire home/apt</h3> Guests will rent the entire place
              <h3> Private room</h3>
              Guests share some spaces <h3>Shared room</h3> Guests don’t have a
              room
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
