import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import { displayAlter, loadTodos, deleteTodoRequest, requestMarkTodoAsComplete } from "./thunks";
import { getTodos, getTodosLoading } from "./selectors";

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
    todos: getTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: (todoID) => dispatch(deleteTodoRequest(todoID)),
    onMarkCompletedPressed: (todoID) => dispatch(requestMarkTodoAsComplete(todoID)),
    onDisplayAlterClicked: () => dispatch(displayAlter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
