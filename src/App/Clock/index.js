import { useState, useEffect } from "react";
import { AppClock } from "./styled.js";

const formatDate = (date) =>
  date.toLocaleString("en-EN", {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  return <AppClock>Today is {formatDate(date)}</AppClock>;
};
