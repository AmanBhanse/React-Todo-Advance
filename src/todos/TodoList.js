import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import { removeTodo, markTodoComplete } from "./actions";

function TodoList({ todos = [], onRemovedPressed, onMarkCompletedPressed }) {
    return (
        <div className="list-wrapper">
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    onRemovedPressed={onRemovedPressed}
                    onMarkCompletedPressed={onMarkCompletedPressed}
                />
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
    onMarkCompletedPressed: (text) => dispatch(markTodoComplete(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
