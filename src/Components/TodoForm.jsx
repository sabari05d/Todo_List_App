import React, { useState } from 'react';
import '../App.css'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        text: text.trim(),
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
