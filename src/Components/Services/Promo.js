import React from "react";
import "./Promo.css";
export default function Promo() {
  const Listdata = [
    {
      img: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0fd7073e-a96d-11ed-9c9b-9439987f775c.jpg",
      Location: "Deira Tower , Baniyas",
    },
    {
      img: "https://cdn.broadsheet.com.au/cache/d8/99/d8999807095c8dc7d5b919a9c2533f31.jpg",
      Location: "Deira Tower , Baniyas",
    },
    {
      img: "https://techcrunch.com/wp-content/uploads/2016/12/dream-presidential-suite-terrace.jpg",
      Location: "Deira Tower , Baniyas",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e8/3d/2b/sala-danang-beach-hotel.jpg?w=700&h=-1&s=1",
      Location: "Deira Tower , Baniyas",
    },
    {
      img: "https://www.hotelscombined.in/himg/6a/6b/15/expediav2-4849391-81982713-759677.jpg",
      Location: "Deira Tower , Baniyas",
    },
  ];
  const ListdataX = [
    {
      img: "https://www.hotelnikkosf.com/resourcefiles/hometopreasonsstay/deluxe-rooms.jpg",
      Location: "Deira Tower , Baniyas",
      Price: 150,
    },
    {
      img: "https://www.caribjournal.com/wp-content/uploads/2018/04/room.jpg",
      Location: "Deira Tower , Baniyas",
      Price: 150,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIq7_pDIsTiGJgMxVKH_G2y0AG84cGRm_oA&usqp=CAU",
      Location: "Deira Tower , Baniyas",
      Price: 150,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLB79_8K4NY2rdFmJWnxuJ6GPNIVaOn5cryLaFDcklTSNS-kjPe1U4rA4CKeDZQtymXxg&usqp=CAU",
      Location: "Deira Tower , Baniyas",
      Price: 150,
    },
  ];
  const IvPage = Listdata.map((a, b) => (
    <li>
      <div
        className="imageside"
        style={{
          backgroundImage: "url(" + a.img + ")",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="promteam">
        <label style={{ color: "white", fontWeight: "bold" }}>
          {a.Location}
        </label>
        <br />
        <button>Book now</button>
      </div>
    </li>
  ));
  const HotelPage = ListdataX.map((a, b) => (
    <li>
      <div className="imagetab">
        <img src={a.img} className="imtab" />
      </div>
      <div className="htt">
        <label>
          <ion-icon name="location-outline"></ion-icon>
          {a.Location}
        </label>
        <br />
        <p>Trivistay Suits</p>
        <div>⭐⭐⭐⭐</div>
        <h3>{a.Price}</h3>
      </div>
      <br />
      <br />
    </li>
  ));
  return (
    <div>
      <div className="container">
        <br />
        <h2>Today's Promo</h2>
        <ul className="promotabs">{IvPage}</ul>
        <br />
      </div>
      <div className="container">
        <br />
        <h2>Avaliable Rooms</h2>
        <p></p>
        <ul className="promoHotel">{HotelPage}</ul>
        <br />
      </div>
    </div>
  );
}
