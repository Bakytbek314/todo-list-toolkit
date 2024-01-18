import React, { useState } from 'react'

const TodoItem = (props) => {
    const { text, id, removeTodo, completed, handletodo, change, handleChangeTodo, handleEditTodo } = props;

    const [input, setInput] = useState(text);

    return (
        <>

            <div className="todo-item">
                {change ? (
                    <>
                        <input value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="change"
                            type="text" />
                        <button onClick={() => handleEditTodo(id, input)} className="btn">Add</button>
                    </>
                ) : (
                    <>
                        <input
                            onChange={() => handletodo(id)}
                            checked={completed}
                            type="checkbox"
                        />
                        <span className={completed ? "text" : null}>{text}</span>
                        <button disabled={completed} onClick={() => handleChangeTodo(id)}>change</button>
                        <button disabled={!completed} onClick={() => removeTodo(id)}>delete</button>
                    </>
                )}
            </div>
        </>
    )
}

export default TodoItem
