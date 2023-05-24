import { useState, useEffect } from "react";
import "./style.css";

const formatDate = (date) => date.toLocaleString("en-EN", {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                setDate(new Date());
            }, 1000
        )
        return () => {
            clearInterval(intervalId);
        }
    }, [date]);

    return (
        <div className="exchangerClock">
            Today is {formatDate(date)}
        </div>
    )
};

