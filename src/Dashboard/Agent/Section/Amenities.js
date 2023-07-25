import React from "react";
import { Link } from "react-router-dom";

export default function Amenities() {
  return (
    <div>
      <div className="container agentsection">
        <div className="parts">
          <div className="row">
            <div className="col">
              <h3>Tell Travelers About Your Space</h3>
              Every space on Makent is unique. Highlight what makes your listing
              welcoming so that it stands out to guests who want to stay in your
              area.
              <h3>Common Amenities</h3>
              <ul class="amenity-list">
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="1"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Essentials</span>
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
                    <span>TV</span>
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
                    <span>Cable TV</span>
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
                    <span>Air Conditioning</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="5"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Heating</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="6"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Kitchen</span>
                  </label>
                  <div class="custom-tooltip ml-2">
                    <i data-id="6"></i>
                  </div>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="7"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Internet</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="8"
                      name="amenities"
                      data-saving="1"
                    />
                    <span>Wireless Internet</span>
                  </label>
                </li>
              </ul>
              <hr />
              <h3>Additional Amenities </h3>
              <ul class="amenity-list  ">
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="10"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Washer</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="11"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Pool</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="12"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Dryer</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="13"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Breakfast</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="14"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Free Parking on Premises</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="15"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Gym</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="16"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Elevator in Building</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="17"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Indoor Fireplace</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="18"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Buzzer/Wireless Intercom</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="19"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Doorman</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="20"
                      name="amenities"
                      data-saving="2"
                    />
                    <span>Shampoo</span>
                  </label>
                </li>
              </ul>
              <hr />
              <h3>
                {" "}
                Special Features
                <br />
                <br />{" "}
                <span style={{ fontWeight: "normal" }}>
                  Features of your listing for guests with specific needs.
                </span>
              </h3>
              <ul class="amenity-list ">
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="21"
                      name="amenities"
                      data-saving="3"
                    />
                    <span>Family/Kid Friendly</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="22"
                      name="amenities"
                      data-saving="3"
                    />
                    <span>Smoking Allowed</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="23"
                      name="amenities"
                      data-saving="3"
                    />
                    <span>Suitable for Events</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="24"
                      name="amenities"
                      data-saving="3"
                    />
                    <span>Pets Allowed</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="25"
                      name="amenities"
                      data-saving="3"
                    />
                    <span>Pets live on this property</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="26"
                      name="amenities"
                      data-saving="3"
                    />
                    <span>Wheelchair Accessible</span>
                  </label>
                </li>
              </ul>
              <hr />
              <div className="row">
                <div className="col">
                  <Link to="/AgentManage/Location">Back</Link>
                </div>
                <div className="col">
                  <div className="btnn" align="right">
                    <Link to="/AgentManage/Photos">
                      <button>NEXT</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="sidepart">
                <h3>Amenities</h3>
                Providing the essentials helps guests feel at home in your
                place. Some hosts provide breakfast, or just coffee and tea.
                None of these things are required, but sometimes they add a nice
                touch to help guests feel welcome.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
