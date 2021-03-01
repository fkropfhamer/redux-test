import {useDispatch, useSelector} from "react-redux";
import {add, selectTodos} from "./todosSlice";
import React, {useState} from "react";
import TodosClass from "./TodosClass";


export default function Todos() {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function addTodo() {
        if (name) {
            dispatch(add({name}))
        }
    }

    return <div>
        <input value={name} onChange={event => setName(event.target.value)} />
        <button onClick={addTodo}>add</button>
        {todos.map(todo => todo.name)}
        <TodosClass />
    </div>
}
