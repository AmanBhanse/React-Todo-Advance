import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

function TodoList({ todos = [{ text: "Hello" }, { text: "Gym" }] }) {
    return (
        <div className="list-wrapper">
            {todos.map((todo) => (
                <TodoListItem todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;
