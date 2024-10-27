import React, { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, index, editTask, deleteTask, toggleCompleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      editTask(task.id, newText);
    }
  };

  return (
    <div className="task-item">
      <span>{index}. </span>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => toggleCompleteTask(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
