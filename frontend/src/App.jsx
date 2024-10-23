import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import "./App.css"

const App = () => {
  return (
    <div className="sections">
      <div className="newTasks">
        <h2>Add New Task</h2>
        <TaskForm />
      </div>
      <div className="completeTasks">
        <h2>Completed Tasks</h2>
        <TaskList completed={true} /> {/* Display completed tasks */}
      </div>
      <div className="incompleteTasks">
        <h2>Incomplete Tasks</h2>
        <TaskList completed={false} /> {/* Display incomplete tasks */}
      </div>
    </div>
  );
};

export default App;