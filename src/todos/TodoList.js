import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import { removeTodo } from "./actions";

function TodoList({ todos = [{ text: "Hello" }, { text: "Gym" }], onRemovedPressed }) {
    return (
        <div className="list-wrapper">
            {todos.map((todo) => (
                <TodoListItem todo={todo} onRemovedPressed={onRemovedPressed} />
            ))}
        </div>
    );
}

//below is function which return json object (beaware of syntax)
const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    onRemovedPressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
