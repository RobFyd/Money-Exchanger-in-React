import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "running",
  });

  useEffect(() => {
    const fetchRateData = async () => {
      try {
        const response = await axios.get(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_WlbxoHy21n9fPcWpRcJCNXZzsijaRmOJujQZE9YK&base_currency=GBP"
        );
        const { data } = response.data;

        setRatesData({
          state: "success",
          data,
        });
      } catch (error) {
        console.error("error fetching data", error);
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRateData, 2500);
  }, []);

  return ratesData;
};
