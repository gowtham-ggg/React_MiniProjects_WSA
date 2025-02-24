import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      {data.map((item) => (
        <div className="card-items" key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Card;
