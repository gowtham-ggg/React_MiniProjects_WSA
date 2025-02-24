import React, { useEffect, useState } from "react";
import Log from "./Log";

const Tracker = () => {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (note) {
      const lowerCaseNote = note.toLowerCase();

      let detectedMood = "";
      if (
        lowerCaseNote.includes("happy") ||
        lowerCaseNote.includes("joy") ||
        lowerCaseNote.includes("enjoy")
      ) {
        detectedMood = "Happy";
      } else if (
        lowerCaseNote.includes("sad") ||
        lowerCaseNote.includes("sorrow") ||
        lowerCaseNote.includes("lonely")
      ) {
        detectedMood = "Sad";
      } else {
        detectedMood = "";
      }

      setMood(detectedMood);
    } else {
      setMood("");
    }
  }, [note]);

  const handleMood = () => {
    if (mood && note) {
      setHistory((prev) => [...prev, { mood, note }]);
      setNote("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Mood Tracker</h1>
      <div
        style={{
          marginBottom: "20px",
          padding: "40px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <input
          type="text"
          placeholder="Your Mood"
          value={mood}
          readOnly
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="How are you feeling?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleMood}
          style={{
            backgroundColor: "#28a745",
            width: "80%",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Log Mood
        </button>
      </div>
      <div>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Mood History
        </h2>
        <Log history={history} />
      </div>
    </div>
  );
};

export default Tracker;
