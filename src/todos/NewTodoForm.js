import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { createTodo } from "./actions";

function NewTodoForm({ todos, onCreatePressed }) {
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
            <button
                className="new-todo-button"
                onClick={() => {
                    const isDuplicateText = todos.some((todo) => todo.text === inputText);
                    if (!isDuplicateText) {
                        onCreatePressed(inputText);
                        setInputText("");
                    }
                }}
            >
                create todo
            </button>
        </div>
    );
}

//state is object that represent entire redux state
const mapStateToProps = (state) => {
    return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
    return { onCreatePressed: (text) => dispatch(createTodo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
