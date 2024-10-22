// Import React and the useState hook for managing component state
import React, { useState } from 'react';

// Define the TaskForm functional component
// 'addTask' is passed as a prop, which will allow this component to add new tasks
const TaskForm = ({ addTask }) => {
  // 'title' state holds the value of the task's title
  // 'setTitle' is used to update the 'title' state
  // Initially, the title is an empty string
  const [title, setTitle] = useState('');

  // 'description' state holds the value of the task's description
  // 'setDescription' is used to update the 'description' state
  // Initially, the description is an empty string
  const [description, setDescription] = useState('');

  // Function to handle form submission
  // 'e' is the event object representing the form submission event
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior (i.e., page refresh)
    e.preventDefault();

    // Call the 'addTask' function passed as a prop and pass the new task object (with title and description)
    addTask({ title, description });

    // Clear the form fields by resetting 'title' and 'description' to empty strings
    setTitle('');
    setDescription('');
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the task title */}
      <input
        type="text" // Specifies this is a text input
        value={title} // Binds the input value to the 'title' state
        onChange={(e) => setTitle(e.target.value)} // Updates the 'title' state when the input changes
        placeholder="Task Title" // Placeholder text for the input field
        required // Ensures this field is required before submitting the form
      />

      {/* Textarea for the task description */}
      <textarea
        value={description} // Binds the textarea value to the 'description' state
        onChange={(e) => setDescription(e.target.value)} // Updates the 'description' state when the textarea content changes
        placeholder="Task Description" // Placeholder text for the textarea
        required // Ensures this field is required before submitting the form
      ></textarea>

      {/* Button to submit the form */}
      <button type="submit">Add Task</button>
    </form>
  );
};

// Export the TaskForm component so it can be imported and used in other parts of the app
export default TaskForm;