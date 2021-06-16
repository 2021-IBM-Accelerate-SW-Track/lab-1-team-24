import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = function(todo){
        //check for dups here
        if(!todo.text || /^\s*$/.test(todo.text))
            return 
        
        const newTodos = [...todos, todo]
        setTodos(newTodos)
    }

    const removeTodo = function(id){
        var check;
        var array = [...todos]
       for(let i = 0; i < array.length; i++){
           if(array[i].id === id)
            check = array[i]
       }
       var index = array.indexOf(check)
       if(index != -1){
           array.splice(index,1);
           setTodos(array)
       }
    }

    const completeTodo = function(id){
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete =! todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos)
    }

    return (
        <div>
            <h1> Whats the Plan for Today?</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo 
                todos = {todos}
                completeTodo = {completeTodo}
                removeTodo = {removeTodo}
            />
        </div>
    )
}

export default TodoList
