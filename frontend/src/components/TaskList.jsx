import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import TaskItem from './TaskItem'; // Import TaskItem component

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // State for tasks

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:5000/tasks'); // Adjust the URL as needed
      const data = await response.json();
      setTasks(data); // Set tasks state with the fetched data
    };
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => ( // Render a list of TaskItem components
        <TaskItem key={task._id} task={task} /> // Use unique key for each item
      ))}
    </div>
  );
};

export default TaskList; // Export the TaskList component