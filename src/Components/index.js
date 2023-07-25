import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Trending from "./Trending/Trending";
import Stay from "./Stay/Stay";
import Footer from "./Footer/Footer";
import Promo from "./Promo/Promo";
import useFetch from "../hooks/UseFetch";

export default function Home() {
  const [list, setList] = useState([]);
  const { data } = useFetch(`/hotels`);

  useEffect(() => {
    setList(data);
    console.log("Data", data);
  }, [data]);

  return (
    <div>
      <Header />
      {/* <div style={{ height: "45vh" }}></div> */}
      <Main dataraay={data} />
      <Promo dataraay={data} />
      {/* <Trending /> */}
      {/* <Stay /> */}
      {/* <Footer /> */}
    </div>
  );
}
