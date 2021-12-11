import React from "react";
import "./TodoListItem.css";

function TodoListItem({ todo }) {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="button-container">
                <button className="remove-todo-button">✖</button>
                <button className="complete-todo-button">✔</button>
            </div>
        </div>
    );
}

export default TodoListItem;
