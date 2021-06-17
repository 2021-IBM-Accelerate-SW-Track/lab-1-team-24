import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import {FaClock} from 'react-icons/fa'

function Todo({ todos, completeTodo, removeTodo, updateTodo, displayTime }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const [hover,setHover] = useState(false);

    const onHover = function(){
        setHover(true)
    }

    const onLeave = function(){
        setHover(false)
    }


    const submitUpdate = function(value){
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForm edit = {edit} onSubmit ={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className = {todo.isComplete ? 'todo-row complete' : 'todo-row'} key = {index}>
            <div key = {todo.id} onClick= {() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className = "icons">
                <RiCloseCircleLine onClick = {() => {removeTodo(todo.id)}}
                    className = 'delete-icon'
                />
                <TiEdit onClick = {() => {setEdit({id: todo.id , value: todo.text})}}
                    className = 'edit-icon'/>

                <FaClock classname = 'clock' onMouseEnter = {onHover}
                    onMouseLeave= {onLeave}> </FaClock>

                {hover && <span> {displayTime(todo.id)}</span>}
            
            </div>
            <hr/>
        </div>
    ))
}

export default Todo
