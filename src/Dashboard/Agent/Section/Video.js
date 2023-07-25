import React from "react";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <div>
      <div className="container agentsection                   ">
        <div className="parts">
          <div className="row">
            <div className="col">
              <h3>Video Can Bring Your Space to Life </h3>
              Add video of areas guests have access to.
              <br />
              <br />
              <div>
                YouTube URL
                <br />
                <br />
                <input placeholder="Youtube Url" className="youtube" />
              </div>
              <hr />
              <br />
              <div className="row">
                <div className="col">
                  <Link to="/AgentManage/Pricing">Back</Link>
                </div>
                <div className="col">
                  <div className="btnn" align="right">
                    <Link to="/AgentManage/Hosting">
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
