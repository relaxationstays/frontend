import React from "react";

export default function Dashboard() {
  const topside = [
    {
      name: "My list",
      icon: <ion-icon name="diamond-outline"></ion-icon>,
      number: 4,
    },
    {
      name: "My list",
      icon: <ion-icon name="hourglass-outline"></ion-icon>,
      number: 10,
    },
    {
      name: "My list",
      icon: <ion-icon name="medal-outline"></ion-icon>,
      number: 14,
    },
  ];
  const topSide = topside.map((item, i) => (
    <li>
      <div style={i == 1 ? { margin: "0px 20px 0px 20px" } : { margin: "0px" }}>
        <label>
          {item.icon}
          {item.name}
          <br />
          {item.number}
        </label>
      </div>
    </li>
  ));
  return (
    <div className="dashbaordside">
      <div className="uplist">
        <ul className="topd">{topSide}</ul>
      </div>
      <div className="">
        <div className="row">
          <div className="col ">
            <div className="mainbg">
              <h3>Latest Bookings</h3>

              <div className="lbook">
                <ul>
                  <li>
                    <div className="imageside"></div>
                  </li>
                  <li>
                    Fresh & Airy Private Bushwick Bedroom <br />
                    <ion-icon name="calendar-outline"></ion-icon> Feb 02 - 03,
                    2022 <br />
                    Test User
                  </li>
                  <li>
                    <label align="center">Accepted</label>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className="imageside"></div>
                  </li>
                  <li>
                    Fresh & Airy Private Bushwick Bedroom <br />
                    <ion-icon name="calendar-outline"></ion-icon> Feb 02 - 03,
                    2022 <br />
                    Test User
                  </li>
                  <li>
                    <label align="center">Accepted</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mainbg">
              {/* <table className="table table-striped table-hover table-header text-center border-grey"> */}
              <h3>Lastest transactions</h3>
              {/* <table className="table  "> */}
              <table className="table table-striped table-hover table-header text-center border-grey">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th>Type</th>
                    <th>Payment Method</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody id="transaction-table-body1">
                  <tr>
                    <td>Booking</td>
                    <td>Bank </td>
                    <td className="text-success">+ $200</td>

                    <td>02-01-2022</td>
                  </tr>
                  <tr>
                    <td>Trip</td>
                    <td>Stripe </td>
                    <td className="text-danger">- $230</td>

                    <td>06-24-2021</td>
                  </tr>
                  <tr>
                    <td>Trip</td>
                    <td>Stripe </td>
                    <td className="text-danger">- $64</td>

                    <td>06-24-2021</td>
                  </tr>
                  <tr>
                    <td>Trip</td>
                    <td>Stripe </td>
                    <td className="text-danger">- $128</td>

                    <td>06-24-2021</td>
                  </tr>
                  <tr>
                    <td>Trip</td>
                    <td>Stripe </td>
                    <td className="text-danger">- $64</td>

                    <td>06-24-2021</td>
                  </tr>
                  <tr>
                    <td>Booking</td>
                    <td>Stripe </td>
                    <td className="text-success">+ $120</td>

                    <td>12-02-2020</td>
                  </tr>
                  <tr>
                    <td>Trip</td>
                    <td>Stripe </td>
                    <td className="text-danger">- $105</td>

                    <td>12-02-2020</td>
                  </tr>
                  <tr>
                    <td>Withdrawn</td>
                    <td>Paypal </td>
                    <td className="text-danger">- $10</td>

                    <td>11-30-2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
