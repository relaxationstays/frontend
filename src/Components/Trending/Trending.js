import React from "react";

export default function Trending() {
  const List = [
    {
      View: "Dubai creek Tunnel",
      Name: "Trivi Single",
      Bed: "1",
      Location: "Deira tower, Baniays Square . Deira Dubai",
      Size: "1 sqrt",
      Price: 100,
    },
    {
      View: "Dubai creek Tunnel",
      Name: "Trivi Single",
      Bed: "1",
      Location: "Deira tower, Baniays Square . Deira Dubai",
      Size: "1 sqrt",
      Price: 100,
    },
    {
      View: "Dubai creek Tunnel",
      Name: "Trivi Single",
      Bed: "1",
      Location: "Deira tower, Baniays Square . Deira Dubai",
      Size: "1 sqrt",
      Price: 100,
    },
    {
      View: "Dubai creek Tunnel",
      Name: "Trivi Single",
      Bed: "1",
      Location: "Deira tower, Baniays Square . Deira Dubai",
      Size: "1 sqrt",
      Price: 100,
    },
  ];

  const Listing = List.map((a, b) => (
    <li>
      <div className="_listImgDiv"></div>
      <div className=" ">{a.name + " | " + a.View}</div>
      <div className=" ">{a.Location}</div>
      <div className=" ">{a.Price}</div>
    </li>
  ));
  return (
    <div>
      <div className="container">
        <ul>
            {Listing}
        </ul>
      </div>
    </div>
  );
}
