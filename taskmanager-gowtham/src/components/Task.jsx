import React, { useState } from "react";
import Log from "./Log";

const Task = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      setTask([...task, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  return (
    <div className="main">
      <h1 className="title">Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <Log task={task} deleteTask={deleteTask} />
    </div>
  );
};

export default Task;
