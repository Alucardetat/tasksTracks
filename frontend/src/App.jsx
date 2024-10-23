import React from 'react'; // Import React
import TaskList from './components/TaskList'; // Import TaskList component
import TaskForm from './components/TaskForm'; // Import TaskForm component

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1> {/* Main heading */}
      <TaskForm /> {/* Task input form */}
      <TaskList /> {/* List of tasks */}
    </div>
  );
};

export default App; // Export the App component