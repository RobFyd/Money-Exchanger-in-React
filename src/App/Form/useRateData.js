import { useEffect, useState } from "react";
import axios from "axios";

var requestURL = "https://api.exchangerate.host/latest?base=GBP";

export const useRateData = () => {
  const [rateData, setRateData] = useState({
    status: "running",
  });

  useEffect(() => {
    const fetchRateData = async () => {
      try {
        const response = await axios.get(requestURL);
        const { rate, date } = response.data;

        setRateData({
          status: "success",
          rate,
          date,
        });
      } catch {
        setRateData({
          status: "error",
        });
      }
    };

    setTimeout(fetchRateData, 2000);
  }, []);

  return rateData;
};
