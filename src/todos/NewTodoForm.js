import React, { useState } from "react";
import "./NewTodoForm.css";

function NewTodoForm() {
    const [inputText, setInputText] = useState("");

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                placeholder="Type your new todo here"
                type="text"
                onChange={(e) => {
                    setInputText(e.target.value);
                }}
            />
            <button className="new-todo-button">create todo</button>
        </div>
    );
}

export default NewTodoForm;
