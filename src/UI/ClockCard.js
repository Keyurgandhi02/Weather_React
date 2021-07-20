import { useState, useEffect } from "react";
import classes from "./ClockCard.module.css";
const ClockCard = () => {
  let time = new Date().toLocaleTimeString();
  const [isTime, setIsTime] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const date = new Date().toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h1>{isTime}</h1>
      </div>

      <div className={classes.container}>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ClockCard;
