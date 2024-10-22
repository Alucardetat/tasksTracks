// Import React, which is required to create React components
import React from 'react';

// Import the TaskItem component, which is used to display individual tasks
import TaskItem from './taskItem';

// Define the TaskList functional component
// This component receives three props: 
// 'tasks' (the list of tasks), 'updateTask' (function to update a task), and 'deleteTask' (function to delete a task)
const TaskList = ({ tasks, updateTask, deleteTask }) => {
  // Return a JSX element that renders a list of TaskItem components
  return (
    <div>
      {/* Map over the 'tasks' array and for each task, return a TaskItem component */}
      {tasks.map((task) => (
        // Each TaskItem needs a unique 'key' prop to help React identify elements when rendering lists
        <TaskItem
          key={task._id} // The 'key' is a unique identifier (the task's '_id') for each TaskItem
          task={task} // Pass the current task object to the TaskItem component
          updateTask={updateTask} // Pass the updateTask function as a prop to TaskItem
          deleteTask={deleteTask} // Pass the deleteTask function as a prop to TaskItem
        />
      ))}
    </div>
  );
};

// Export the TaskList component so it can be imported and used in other parts of the app
export default TaskList;