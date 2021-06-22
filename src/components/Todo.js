import React, { useState } from "react";
import TodoForm from "./TodoForm";
import EditIcon from "./icons/EditIcon.png";
import Trash from "./icons/trash.png";
import Clock from "./icons/alarm.png";

function Todo({ todos, completeTodo, removeTodo, updateTodo, displayTime, updateTime }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const [hover, setHover] = useState({});

  const onHover = function (id) {
    setHover(id);
  };

  const onLeave = function () {
    setHover(null);
  };

  const submitUpdate = function (value) {
    updateTodo(edit.id, value);
    updateTime(edit);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className = "todo-name"key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <img src = {Trash}
          alt = "trash"
          onClick={() => {
            removeTodo(todo.id);
          }}
          className="delete-icon"
        />
        
        <img src = {EditIcon} className="edit-icon"  alt = "edit"
          onClick={() => {setEdit({ id: todo.id, value: todo.text });}}
        />

        <img src = {Clock} 
            alt = "clock"
            className="clock-icon"
            onMouseEnter={() => onHover(todo.id)}
            onMouseLeave={onLeave}
        />  
      </div>
      {hover === todo.id && <span className = "time"> {displayTime(todo.id)} </span>}
      <hr />
    </div>
  ));
}

export default Todo;
