import React from 'react'
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toogleTodo, changeTodo, editTodo } from '../store/todosSlice';

function TodoList() {
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    const removeTodo = (id) => {
        dispatch(deleteTodo(id));
    }
    const handletodo = (id) => {
        dispatch(toogleTodo(id));
    }

    const handleChangeTodo = (id) => {
        dispatch(changeTodo(id));
    }
    const handleEditTodo = (id, text) => {
        console.log(id, text);
        dispatch(editTodo({id, text}));
    }

    return (
        <>
            {
                todos.map((elem, i) => {
                    return <TodoItem key={i} handletodo={handletodo} removeTodo={removeTodo} handleChangeTodo={handleChangeTodo}
                    handleEditTodo={handleEditTodo} {...elem} />
                })
            }
        </>
    )
}

export default TodoList
