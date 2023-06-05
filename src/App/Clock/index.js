import { useCurrentDate } from "./useCurrentDate";
import { AppClock } from "./styled.js";

const Clock = () => {
  const { date } = useCurrentDate();

  const formatDate = date.toLocaleString("en-EN", {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return <AppClock>Today is {formatDate}</AppClock>;
};

export { Clock };
