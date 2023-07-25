import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const url2 = "https://travel-jpx4.onrender.com/api" + url;
  // console.log("Data", url);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url2);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url2]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url2);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
