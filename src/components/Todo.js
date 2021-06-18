import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import EditIcon from "./icons/EditIcon.png";
import Trash from "./icons/trash.png";
import Clock from "./icons/alarm.png";
import { TiEdit } from "react-icons/ti";
import { FaClock } from "react-icons/fa";

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
          onClick={() => {
            removeTodo(todo.id);
          }}
          className="delete-icon"
        />
        
        <img src = {EditIcon} className="edit-icon"  
          onClick={() => {setEdit({ id: todo.id, value: todo.text });}}
        />

        <img src = {Clock} 
            classname="clock"
            onMouseEnter={() => onHover(todo.id)}
            onMouseLeave={onLeave}
        />
        {hover === todo.id && <span className = "time"> {displayTime(todo.id)} </span>}
      </div>
      <hr />
    </div>
  ));
}

export default Todo;
