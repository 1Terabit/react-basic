import React, { useState } from "react";
import "./TaskList.css";

// Definition of the TaskList component
function TaskList() {
  // We use the useState hook to manage the state of the tasks and the new task
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add a task
  const addTask = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setTasks([...tasks, newTask]); // Adds the new task to the task list
    setNewTask(""); // Clears the input field
  };

  // Renders the component
  return (
    <div className="task-list">
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Updates the state of newTask when the value of the input field changes
        />
        <button className="add-task-button" type="submit">
          Add task
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // Renders each task in the list
        ))}
      </ul>
    </div>
  );
}

export default TaskList; // Exports the TaskList component so it can be used in other files
