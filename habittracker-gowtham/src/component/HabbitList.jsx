import React from "react";
import emoji from "emoji-dictionary";

const HabitList = ({ data, setHabitData }) => {
  const toggleDay = (habitIndex, dayIndex) => {
    setHabitData((prevData) =>
      prevData.map((habit, index) => {
        if (index === habitIndex) {
          const updatedDays = [...habit.days];
          updatedDays[dayIndex] = !updatedDays[dayIndex];

          let streak = 0;
          let maxStreak = 0;
          for (let i = 0; i < updatedDays.length; i++) {
            if (updatedDays[i]) {
              streak++;
              maxStreak = Math.max(maxStreak, streak);
            } else {
              streak = 0;
            }
          }

          return { ...habit, days: updatedDays, streak: maxStreak };
        }
        return habit;
      })
    );
  };

  const deleteHabit = (habitIndex) => {
    setHabitData((prevData) =>
      prevData.filter((_, index) => index !== habitIndex)
    );
  };

  return (
    <div className="habit-list">
      {data.length > 0 ? (
        data.map((habit, index) => (
          <div key={index} className="habit-item">
            <div className="habit-name">
              <span>{habit.name}</span>
              {habit.streak >= 3 && (
                <span className="fire-icon">{emoji.getUnicode("fire")}</span>
              )}
            </div>
            <div className="habit-days">
              {habit.days.map((completed, dayIndex) => (
                <button
                  key={dayIndex}
                  className={`day-button ${completed ? "completed" : ""}`}
                  onClick={() => toggleDay(index, dayIndex)}
                >
                  {dayIndex + 1}
                </button>
              ))}
            </div>
            <button
              className="delete-button"
              onClick={() => deleteHabit(index)}
            >
              {emoji.getUnicode("wastebasket")} Delete
            </button>
          </div>
        ))
      ) : (
        <p>No habits added yet</p>
      )}
    </div>
  );
};

export default HabitList;
