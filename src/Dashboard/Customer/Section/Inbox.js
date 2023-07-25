import React from "react";

export default function Inbox() {
  return (
    <div>
      <div className="dashbaordside">
        <div className="topblur">
          <h3>INBOX</h3>
        </div>
        <div className="row">
          <div className="col chatside">
            <div className="chatdiv">
              <ion-icon name="person-outline"></ion-icon>
              <span>user test</span> 1 year ago
              <br />
              Fresh & Airy Private Bushwick Bedro
              <br />
              Hi. Instant Booking
            </div>
            <div className="chatdiv">
              <ion-icon name="person-outline"></ion-icon>
              <span>user test</span> 1 year ago
              <br />
              Fresh & Airy Private Bushwick Bedro
              <br />
              Hi. Instant Booking
            </div>
            <div className="chatdiv">
              <ion-icon name="person-outline"></ion-icon>
              <span>user test</span> 1 year ago
              <br />
              Fresh & Airy Private Bushwick Bedro
              <br />
              Hi. Instant Booking
            </div>
            <div className="chatdiv">
              <ion-icon name="person-outline"></ion-icon>
              user test 1 year ago
              <br />
              Fresh & Airy Private Bushwick Bedro
              <br />
              Hi. Instant Booking
            </div>
          </div>
          <div className="col"></div>
          <div className="col-md-3 card p-0 " id="booking">
            <div className="w-100 overflow-auto right-inbox p-3">
              <a href="https://vrent.techvill.org/properties/fresh-airy-private-bushwick-bedroom">
                <h4 className="text-left text-15 font-weight-700 pl-2 ">
                  Fresh &amp; Airy Private Bushwick Bedroom
                </h4>
              </a>
              <span className="street-address text-muted text-14 pl-4">
                <i className="fas fa-map-marker-alt mr-2"></i>12 Stacey St,
                London WC2H, UK
              </span>
              <div className="row p-2">
                <div className="col-md-12 border p-2">
                  <div className="d-flex  justify-content-between">
                    <div>
                      <div className="text-16">
                        <strong>Check In</strong>
                      </div>
                      <div className="text-14">02-02-2022</div>
                    </div>

                    <div>
                      <div className="text-16">
                        <strong>Check Out</strong>
                      </div>
                      <div className="text-14">02-03-2022</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row p-2">
                <div className="col-md-12 col-sm-6 col-xs-6 border border-success pl-3 pr-3 text-center pt-3 pb-3 mt-3 rounded-3">
                  <p className="text-16 font-weight-700 text-success pt-0 m-0">
                    <i className="fas fa-bed text-20 d-none d-sm-inline-block pr-2 text-success"></i>
                    <strong>1</strong> Guests{" "}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 p-2">
                  <h5 className="text-16 mt-3">
                    <strong>Payment</strong>
                  </h5>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 p-2">
                  <div className="full-table mt-3 border text-dark rounded-3 pt-3 pb-3 mb-4">
                    <p className="row margin-top10 text-justify text-16">
                      <span className="text-left col-sm-6 text-14">
                        $ 200 x 1 night{" "}
                      </span>
                      <span className="text-right col-sm-6 text-14">
                        $ 200{" "}
                      </span>
                    </p>

                    <p className="row margin-top10 text-justify text-16">
                      <span className="text-left col-sm-6 text-14">
                        Service fee
                      </span>
                      <span className="text-right col-sm-6 text-14">$ 10</span>
                    </p>

                    <p className="row margin-top10 text-justify text-16">
                      <span className="text-left col-sm-6 text-14">
                        Accommodation Tax
                      </span>
                      <span className="text-right col-sm-6 text-14">$ 10</span>
                    </p>

                    <p className="row margin-top10 text-justify text-16">
                      <span className="text-left col-sm-6 text-14">
                        I.V.A Tax
                      </span>
                      <span className="text-right col-sm-6 text-14">$ 10</span>
                    </p>

                    <p className="row margin-top10 text-justify text-16">
                      <span className="text-left col-sm-6 text-14">Total</span>
                      <span className="text-right col-sm-6 text-14">$ 230</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
