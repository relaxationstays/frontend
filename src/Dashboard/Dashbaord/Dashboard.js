import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/UseFetch";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  console.log("Username App", user.username);

  const [list, setList] = useState([]);
  const { data } = useFetch(`/users/${user._id}`);

  useEffect(() => {
    let arr = [];
    arr.push(data);
    setList(arr);
    console.log("Userdata", data);
  }, [data]);

  const bookings = list.map((a, b) => (
    <div>
      {a?.rooms?.map((itemx) => (
        <div className="col">
          <div className="row">
            <div className="col col-4">
              {itemx?.images?.map((imgsrc) => (
                <img src={imgsrc} height="75px" />
              ))}
            </div>
            <div className="col col">
              {itemx.name}
              <br />
              <div className="amenetiespan">
                {itemx?.amenities?.map((itemp) => (
                  <label style={{ marginRight: "20px" }}>{itemp}</label>
                ))}
              </div>
              12th/06/2023  to 16th/06/2023
            </div>
            <div className="col col-4 bookbutton" align="center">
              <button>Complete Booking</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      <div className="container board">
        <div className="minimenu">
          <div>
            <ion-icon name="person-remove-outline"></ion-icon> My profile
          </div>
          <div>
            <ion-icon name="cart-outline"></ion-icon> My Bookings
          </div>
          <div>My Accomodation</div>
        </div>
        <div className="dashb">
          <div className="databooks">{bookings}</div>
        </div>
      </div>
    </div>
  );
}
