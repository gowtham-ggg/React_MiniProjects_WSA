import React, { useState } from "react";
import HabitList from "./HabbitList";

const AddHabit = () => {
  const [habitData, setHabitData] = useState([]);
  const [habit, setHabit] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      setHabitData((prevData) => [
        ...prevData,
        { name: habit, days: Array(7).fill(false), streak: 0 },
      ]);
      setHabit("");
    }
  };

  return (
    <div className="main">
      <div className="header">
        <h1>Habit Tracker</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter habit name"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
          />
          <button onClick={handleClick}>Add Habit</button>
        </div>
      </div>

      <HabitList data={habitData} setHabitData={setHabitData} />
    </div>
  );
};

export default AddHabit;
