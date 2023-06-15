import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY, RAPID_API_HOST, RAPID_API_URL } from "@env";

// const rapidApiKey = RAPID_API_KEY;
// const rapidApiHost = RAPID_API_HOST;
// const rapidApiUrl = RAPID_API_URL;

export const useGet = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${endpoint}`,
        {
          params: {
            api_key: "1fe3d0290842d2b4e156001bdc2a0328",
          },
        }
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
