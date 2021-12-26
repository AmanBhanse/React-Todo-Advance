import React from "react";
import NewTodoForm from "../todos/NewTodoForm";
import TodoList from "../todos/TodoList";

function HomePage() {
    return (
        <div>
            <NewTodoForm />
            <TodoList />
        </div>
    );
}

export default HomePage;
