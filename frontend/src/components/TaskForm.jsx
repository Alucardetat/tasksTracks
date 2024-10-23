import React, { useState } from 'react'; // Import React and useState

const TaskForm = () => {
  const [title, setTitle] = useState(''); // State for task title

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    const response = await fetch('http://localhost:5000/tasks', { // Adjust the URL as needed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }), // Convert the title to JSON
    });
    
    // Reset the input field after submission
    if (response.ok) {
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form submission handler */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button> {/* Submit button */}
    </form>
  );
};

export default TaskForm; // Export the TaskForm component