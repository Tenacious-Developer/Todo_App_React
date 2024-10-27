import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, deleteTask, toggleCompleteTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            index={index + 1}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleCompleteTask={toggleCompleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
