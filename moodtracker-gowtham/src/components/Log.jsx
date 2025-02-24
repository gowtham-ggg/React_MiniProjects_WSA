import React from "react";

const Log = ({ history }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {history.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "5px",
            maxWidth: "350px",
            textAlign: "center",
          }}
        >
          <strong style={{ color: "#495057" }}>{item.mood}</strong> :{" "}
          {item.note}
        </div>
      ))}
    </div>
  );
};

export default Log;
