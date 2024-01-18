import React, {useState} from 'react'
import { addTodo } from '../store/todosSlice'
import { useDispatch } from 'react-redux'

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim() !== ""){
            dispatch(addTodo(text));
            setText("");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='todo-form'>
                <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default TodoForm
