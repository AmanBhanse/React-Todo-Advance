import React from "react";
import "./TodoListItem.css";

function TodoListItem({ todo, onRemovedPressed, onMarkCompletedPressed }) {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="button-container">
                <button
                    className="remove-todo-button"
                    onClick={() => {
                        onRemovedPressed(todo.id);
                    }}
                >
                    ✖
                </button>

                {!todo.isCompleted && (
                    <button
                        className="complete-todo-button"
                        onClick={() => onMarkCompletedPressed(todo.text)}
                    >
                        ✔
                    </button>
                )}
            </div>
        </div>
    );
}

export default TodoListItem;
