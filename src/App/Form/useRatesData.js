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
        const { data, meta } = response.data;

        setRatesData({
          state: "success",
          data,
          meta,
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
