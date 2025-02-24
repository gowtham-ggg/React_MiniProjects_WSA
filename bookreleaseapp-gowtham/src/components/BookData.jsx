import React, { useEffect, useState } from "react";

const BookData = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState({});
  const [count, setCount] = useState({});

  const toggleFavorite = (index) => {
    setIsFavorite((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const calculateTimeLeft = (releaseDate) => {
    const now = new Date();
    const timeDiff = new Date(releaseDate) - now;

    if (timeDiff <= 0) {
      return "Available Now";
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

    return `${days} days ${hours} hours`;
  };

  const updateCountdown = (index, releaseDate) => {
    const newCountdown = calculateTimeLeft(releaseDate);

    setCount((prev) => ({
      ...prev,
      [index]: newCountdown,
    }));

    if (newCountdown !== "Available Now") {
      setTimeout(() => updateCountdown(index, releaseDate), 1000);
    }
  };

  useEffect(() => {
    data.forEach((item, index) => {
      updateCountdown(index, item.date);
    });
  }, [data]);

  return (
    <div>
      {data.map((item, index) => (
        <div className="book-data" key={index} style={{ marginBottom: "20px" }}>
          <h2>{item.title}</h2>
          <p>By: {item.author}</p>
          <p>Release Date: {new Date(item.date).toLocaleDateString()}</p>
          <p>Genre: {item.genre}</p>
          <p>Time until released: {count[index]}</p>
          <div className="button-container">
            <button
              onClick={() => toggleFavorite(index)}
              className={isFavorite[index] ? "red" : ""}
            >
              {isFavorite[index] ? "❤️ Whitelisted" : "🤍 Add to Whitelist"}
            </button>
            {count[index] === "Available Now" && (
              <button className="avail">📚 Available Now!</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookData;
