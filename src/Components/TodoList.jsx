import React from 'react';
import '../App.css'

import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </div>
  );
};

export default TodoList;
