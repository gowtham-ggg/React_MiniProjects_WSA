import React from "react";

const Log = ({ task, deleteTask }) => {
  return (
    <div>
      {task.length === 0 ? (
        <div className="no-tasks">No task added yet!...</div>
      ) : (
        task.map((item, index) => (
          <div className="task-item" key={index}>
            <span>{item}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Log;
