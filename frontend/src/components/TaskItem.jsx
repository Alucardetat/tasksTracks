import React from 'react'; // Import React

const TaskItem = ({ task }) => { // Accept task as a prop
  return (
    <div>
      <h2>{task.title}</h2> {/* Display task title */}
      {/* Additional UI for task actions can be added here */}
    </div>
  );
};

export default TaskItem; // Export the TaskItem component