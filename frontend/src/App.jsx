import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '30%' }}>
        <h2>Add New Task</h2>
        <TaskForm />
      </div>
      <div style={{ width: '30%' }}>
        <h2>Completed Tasks</h2>
        <TaskList completed={true} /> {/* Display completed tasks */}
      </div>
      <div style={{ width: '30%' }}>
        <h2>Incomplete Tasks</h2>
        <TaskList completed={false} /> {/* Display incomplete tasks */}
      </div>
    </div>
  );
};

export default App;