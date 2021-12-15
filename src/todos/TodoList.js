import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import { removeTodo, markTodoComplete } from "./actions";
import { displayAlter, loadTodos } from "./thunks";

function TodoList({
    todos = [],
    onRemovedPressed,
    onMarkCompletedPressed,
    onDisplayAlterClicked,
    isLoading,
    startLoadingTodos,
}) {
    useEffect(() => {
        startLoadingTodos();
    }, [startLoadingTodos]);

    const loadingMessage = <div>Loading todos...</div>;

    const content = (
        <div className="list-wrapper">
            <button onClick={onDisplayAlterClicked}>Dispatch thunk</button>
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemovedPressed={onRemovedPressed}
                    onMarkCompletedPressed={onMarkCompletedPressed}
                />
            ))}
        </div>
    );

    return isLoading ? loadingMessage : content;
}

//below is function which return json object (beaware of syntax)
const mapStateToProps = (state) => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: (text) => dispatch(removeTodo(text)),
    onMarkCompletedPressed: (text) => dispatch(markTodoComplete(text)),
    onDisplayAlterClicked: () => dispatch(displayAlter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
