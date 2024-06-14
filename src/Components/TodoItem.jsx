import React, { useState } from 'react';
import '../App.css'



const TodoItem = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo({
      ...todo,
      text: newText,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleComplete(todo.id)} 
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
