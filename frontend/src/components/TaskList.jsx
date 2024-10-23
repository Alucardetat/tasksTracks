import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ completed }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
        const response = await fetch('http://localhost:5000/tasks'); // Adjust the URL as needed
        const data = await response.json();
        // Filter tasks based on completion status
        setTasks(data.filter(task => task.completed === completed));
    };
    fetchTasks();
}, [completed]);

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;