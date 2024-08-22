"use client";
import React, { useState } from "react";
import "../../../public/sass/pages/todolist.scss";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleTask = () => {
    setTodo([...todo, task]);
    setTask("");
  };
  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  return (
    <div className="todo_outer_container">
      <div className="todo_heading">
        <h1>Todo List</h1>
      </div>
      <div className="todo_input_form">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleTask}>Add</button>
      </div>
      <div className="todo_show_list">
        {todo.map((item, index) => {
          return (
            <div className="todo_list_item">
              <div key={index}>
                {index + 1}
                {item}
              </div>
              <button
                className="todo_delete_button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
