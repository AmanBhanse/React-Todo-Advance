import React from "react";
import "./TodoListItem.css";

function TodoListItem({ todo, onRemovedPressed, onMarkCompletedPressed }) {
    const getTodoListItemClassName = () => {
        let todoListItemClassName = "todo-item-container";
        const pendingTodoClassName = "pending-todo";
        const completedTodoClassName = "completed-todo";

        if (todo.isCompleted === false) {
            todoListItemClassName = todoListItemClassName + " " + pendingTodoClassName;
        } else if (todo.isCompleted === true) {
            todoListItemClassName = todoListItemClassName + " " + completedTodoClassName;
        }
        return todoListItemClassName;
    };

    return (
        <div className={getTodoListItemClassName()}>
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
