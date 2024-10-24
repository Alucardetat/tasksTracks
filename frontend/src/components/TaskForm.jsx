import React, { useState } from "react";
import "./Form.css";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // New state for description
  const [dueDate, setDueDate] = useState(""); // New state for due date

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, dueDate }), // Send new fields
    });

    if (response.ok) {
      setTitle("");
      setDescription(""); // Reset description
      setDueDate(""); // Reset due date
      // Optionally, trigger a re-fetch of tasks here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
