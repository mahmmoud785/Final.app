import React, { useState, useEffect } from 'react';
import taskStore from '../flux/store';
import { addTask, deleteTask } from '../flux/actions';

const TaskApp = () => {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState(taskStore.getTasks());

  useEffect(() => {
    const updateTasks = () => {
      const updatedTasks = taskStore.getTasks();
      setTaskList(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    taskStore.on('change', updateTasks);
    return () => taskStore.removeListener('change', updateTasks);
  }, []);

  const handleAdd = () => {
    if (taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput('');
    }
  };

  const handleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <div>
      <h2>My tasks</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Write the task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {taskList.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;