import React , {useState, useEffect, useRef} from 'react'
import Button from '@material-ui/core/Button'

function TodoForm(props) {
    
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    
    const handleChange = function(e){
        setInput(e.target.value)
    }

    const handleSubmit = function(e){
        e.preventDefault();
        var today = new Date()
        var currTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        props.onSubmit({
             id: Math.floor(Math.random() * 10000),
             text: input,
             time: currTime
        });
        setInput('')
    }

    return (
        <form className = "todo-form" onSubmit = {handleSubmit}>
            {props.edit ? (
                <div>
                    <input 
                        type = "text" 
                        placeholder = "Update" 
                        value = {input} 
                        name = "text"
                        className = "todo-input edit"
                        onChange = {handleChange}
                        ref = {inputRef}
                    />
                    <button
                        className = "todo-button edit"> Update </button>
                    <hr/>
                </div>
            ):(<div> 
                    <input 
                        data-testid="new-item-input"
                        type = "text" 
                        placeholder = "Add a Todo" 
                        value = {input} 
                        name = "text"
                        className = "todo-input"
                        onChange = {handleChange}
                        ref = {inputRef}
                    />
                    <button 
                        className = "todo-button"> Add Todo </button>
                    <hr/>
                </div> 
            )}   
        </form>
    )
}

export default TodoForm
