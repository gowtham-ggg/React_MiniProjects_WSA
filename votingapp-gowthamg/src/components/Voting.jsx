import React, { useState } from "react";
import { data } from "../assets/asset";

const Voting = () => {
  const [votes, setVotes] = useState(
    data.reduce((acc, item) => {
      acc[item.name] = 0;
      return acc;
    }, {})
  );

  const handleClick = (fruitName) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [fruitName]: prevVotes[fruitName] + 1,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F5E0E6",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#6A1B9A", marginBottom: "30px" }}>
        Vote for Your Favorite Fruit!
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          maxWidth: "900px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "200px",
            }}
          >
            <img src={item.img} alt={item.name} width={120} />
            <h3 style={{ color: "#6A1B9A", margin: "10px 0" }}>{item.name}</h3>
            <button
              onClick={() => handleClick(item.name)}
              style={{
                backgroundColor: "#81C784",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              Vote
            </button>
            <h4 style={{ marginTop: "10px" }}>Votes: {votes[item.name]}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voting;
