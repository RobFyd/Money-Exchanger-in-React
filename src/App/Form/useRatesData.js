import { useEffect, useState } from "react";
import axios from "axios";

// var requestURL = "https://api.exchangerate.host/latest?base=GBP";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "running",
  });

  useEffect(() => {
    const fetchRateData = async () => {
      try {
        const response = await axios.get("https://api.exchangerate.host/latest?base=GBP");
        const { rates, date } = response.data;

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRateData, 2500);
  }, []);

  return ratesData;
};
