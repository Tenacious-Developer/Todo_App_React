import React, { useState } from 'react';
import TaskList from './TaskList';
import './Todo.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      const newTask = { id: Date.now(), text: input, completed: false };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
  };

  const toggleCompleteTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Enter task..."
        />
        <button onClick={addTask} className="add-button">Add</button>
      </div>
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} />
    </div>
  );
}

export default Todo;
