// Import React and the useState hook for managing component state
import React, { useState } from 'react';

// Define the TaskItem functional component
// This component receives three props:
// 'task' (the task object to display), 'updateTask' (function to update the task), 
// and 'deleteTask' (function to delete the task)
const TaskItem = ({ task, updateTask, deleteTask }) => {
  // 'isEditing' state determines if the task is in edit mode (true) or view mode (false)
  // 'setIsEditing' is used to update the 'isEditing' state
  const [isEditing, setIsEditing] = useState(false);

  // 'updatedTitle' state holds the value of the task's updated title
  // It is initialized with the current task title
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  // 'updatedDescription' state holds the value of the task's updated description
  // It is initialized with the current task description
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  // Function to handle the update of a task
  const handleUpdate = () => {
    // Call the 'updateTask' function passed as a prop, providing the task ID and the updated title/description
    updateTask(task._id, { title: updatedTitle, description: updatedDescription });

    // Exit edit mode by setting 'isEditing' to false
    setIsEditing(false);
  };

  // Render the component
  return (
    <div className="task-item"> {/* Wrapper for each task item */}
      {isEditing ? ( // Conditional rendering based on 'isEditing' state
        <>
          {/* Input field for updating the task title */}
          <input
            type="text" // Specifies this is a text input
            value={updatedTitle} // Binds the input value to the 'updatedTitle' state
            onChange={(e) => setUpdatedTitle(e.target.value)} // Updates 'updatedTitle' state when input changes
          />

          {/* Textarea for updating the task description */}
          <textarea
            value={updatedDescription} // Binds the textarea value to the 'updatedDescription' state
            onChange={(e) => setUpdatedDescription(e.target.value)} // Updates 'updatedDescription' state when textarea changes
          ></textarea>

          {/* Button to save changes to the task */}
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : ( // If not in editing mode
        <>
          {/* Display the task title */}
          <h3>{task.title}</h3>

          {/* Display the task description */}
          <p>{task.description}</p>

          {/* Button to toggle to edit mode */}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      {/* Button to delete the task */}
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
  );
};

// Export the TaskItem component so it can be imported and used in other parts of the app
export default TaskItem;