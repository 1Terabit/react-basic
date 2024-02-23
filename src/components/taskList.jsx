import React, { useState } from "react";
import "./TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div className="task-list">
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-task-button" type="submit">
          Add task
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
