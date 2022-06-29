import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearTodo, removeTodo } from "./features/todoSlice";

export default function Todo() {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeTodo(index))}>{item}</li>)

    const itemSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => itemSubmit(e)}>
                <input id="newItem" type='text' onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul id="list">
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearTodo())}>
                Clear To Do List
            </button>
        </div>
    )
}