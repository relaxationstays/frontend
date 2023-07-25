import React from "react";
import "./Customer.css";
import Dashboard from "./Section/Dashboard";
import Inbox from "./Section/Inbox";

export default function Customer() {
  const dataJson = [
    {
      name: "Dashboard",
      icon: <ion-icon name="home-outline"></ion-icon>,
    },
    {
      name: "Inbox",
      icon: <ion-icon name="mail-unread-outline"></ion-icon>,
    },
    {
      name: "Listings",
      icon: <ion-icon name="list-outline"></ion-icon>,
    },
    {
      name: "Bookings",

      icon: <ion-icon name="cart-outline"></ion-icon>,
    },
    {
      name: "Your Trips",
      icon: <ion-icon name="cart-outline"></ion-icon>,
    },
    {
      name: "Favorite",
      icon: <ion-icon name="cart-outline"></ion-icon>,
    },
    {
      name: "Payouts",
      icon: <ion-icon name="cash-outline"></ion-icon>,
    },
    {
      name: "Transaction",
      icon: <ion-icon name="filter-outline"></ion-icon>,
    },
    {
      name: "Profile",
      icon: "",
    },
    {
      name: "Review",
      icon: "",
    },
  ];

  const Sidebar = dataJson.map((a, b) => (
    <div className={b == 0 ? "sideActive selecttabs" : "selecttabs"}>
      <div className="row">
        <div className="col-2">{a.icon}</div>
        <div className="col">{a.name}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="sidebar">{Sidebar}</div>
      <Dashboard />
      {/* <Inbox /> */}
    </div>
  );
}
