// Import necessary modules from React
// 'useState' is used to manage state in functional components
// 'useEffect' allows you to run side effects (e.g., fetching data) after the component renders
import React, { useState, useEffect } from 'react';

// Import the TaskList and TaskForm components, which handle the display and creation of tasks
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';

// Import the CSS file for styling the App component
import './App.css';

// Define the main App component as a functional component
const App = () => {
  // 'tasks' is the state variable holding the list of tasks
  // 'setTasks' is the function to update the state
  // Initially, tasks is an empty array
  const [tasks, setTasks] = useState([]);

  // 'useEffect' runs the fetchTasks function when the component mounts (initial render)
  // The empty array '[]' as the second argument means it only runs once, similar to componentDidMount in class components
  useEffect(() => {
    fetchTasks(); // Fetch tasks from the server when the component mounts
  }, []); // Empty dependency array ensures the effect only runs once

  // Function to fetch tasks from the backend API
  const fetchTasks = async () => {
    // Fetch the tasks from the backend API (assumes the API is running on the same server)
    const response = await fetch('/api/tasks');
    
    // Parse the JSON response data
    const data = await response.json();
    
    // Update the 'tasks' state with the fetched tasks
    setTasks(data);
  };

  // Function to add a new task to the list
  // 'task' is the new task object to be added
  const addTask = async (task) => {
    // Make a POST request to the backend API to create a new task
    const response = await fetch('/api/tasks', {
      method: 'POST', // Specify the HTTP method (POST for creating new tasks)
      headers: { 'Content-Type': 'application/json' }, // Set the request headers (JSON content type)
      body: JSON.stringify(task), // Convert the task object to a JSON string for the request body
    });
    
    // Parse the response to get the newly created task
    const newTask = await response.json();
    
    // Update the 'tasks' state by adding the new task to the current list of tasks
    setTasks([...tasks, newTask]);
  };

  // Function to update an existing task
  // 'taskId' is the ID of the task to update, 'updatedTask' is the new task data
  const updateTask = async (taskId, updatedTask) => {
    // Make a PUT request to update the task in the backend
    await fetch(`/api/tasks/${taskId}`, {
      method: 'PUT', // Specify the HTTP method (PUT for updating existing tasks)
      headers: { 'Content-Type': 'application/json' }, // Set the request headers (JSON content type)
      body: JSON.stringify(updatedTask), // Convert the updated task object to a JSON string
    });

    // Update the 'tasks' state by replacing the old task with the updated one
    // If the task ID matches, replace it with the updated task, otherwise keep the existing task
    setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)));
  };

  // Function to delete a task
  // 'taskId' is the ID of the task to delete
  const deleteTask = async (taskId) => {
    // Make a DELETE request to remove the task from the backend
    await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });

    // Update the 'tasks' state by filtering out the deleted task
    // Only keep tasks that do not match the deleted task's ID
    setTasks(tasks.filter((task) => task._id !== taskId));
  };

  // Render the App component
  return (
    <div className="App">
      {/* Title of the application */}
      <h1>Task Management</h1>

      {/* Render the TaskForm component and pass the addTask function as a prop */}
      <TaskForm addTask={addTask} />

      {/* Render the TaskList component and pass tasks, updateTask, and deleteTask as props */}
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

// Export the App component so it can be used in other parts of the application
export default App;