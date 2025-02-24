import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getPeriod = (hour) => {
    return hour >= 12 ? "PM" : "AM";
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #e4a3ff, #fcb0f1)",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px", color: "black" }}>
        Digital Clock
      </h1>
      <div
        style={{
          padding: "20px 40px",
          backgroundColor: "#e9b6eb",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          border: "2px solid white",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "white",
            margin: 0,
          }}
        >
          {formatZero(formatHour(time.getHours()))}:
          {formatZero(time.getMinutes())}:{formatZero(time.getSeconds())}{" "}
          {getPeriod(time.getHours())}
        </h2>
      </div>
    </div>
  );
};

export default Clock;
