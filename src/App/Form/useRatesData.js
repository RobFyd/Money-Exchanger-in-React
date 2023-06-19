import { useEffect, useState } from "react";
import axios from "axios";

var requestURL = "https://api.exchangerate.host/latest?base=GBP";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "running",
  });

  useEffect(() => {
    const fetchRateData = async () => {
      try {
        const response = await axios.get(requestURL);
        const { rates, date } = response.data;

        setRatesData({
          status: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          status: "error",
        });
      }
    };

    setTimeout(fetchRateData, 2000);
  }, []);

  return ratesData;
};
