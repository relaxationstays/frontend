import React from "react";
import { Link } from "react-router-dom";

export default function Photos() {
  return (
    <div>
      <div className="container agentsection">
        <div className="parts">
          <div className="row">
            <div className="col">
              <h3>Photos Can Bring Your Space to Life</h3>
              Add photos of areas guests have access to. You can always come
              back later and add more.
              <div className="tabx">
                <ion-icon name="cloud-upload-outline"></ion-icon>ADD PHOTOS
              </div>
              <hr />
              Drag image to set featured image.
              <div className="row">
                <div className="col">
                  <Link to="/AgentManage/Amenities">Back</Link>
                </div>
                <div className="col">
                  <div className="btnn" align="right">
                    <Link to="/AgentManage/Video">
                      <button>NEXT </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="sidepart">
                <h3>Guests Love Photos</h3>
                Include a few well-lit photos.
                <br />
                Cell phone photos are just fine.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
