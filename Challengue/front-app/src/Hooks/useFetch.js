import { useState, useEffect } from "react";
import userRequest from "../api/userRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await userRequest.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);
  return { data, error };
};
export default useFetch;
