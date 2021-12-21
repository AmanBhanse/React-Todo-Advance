import {
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure,
    createTodo,
    removeTodo,
    markTodoComplete,
} from "./actions";
import { getTodosFromDB, addTodoToDB, deleteTodoFromDB, markTodoAsCompleteInDB } from "./firebase";

//Thunk is function is function which returns functions which contains actual logic we want to perform when triggered

export const displayAlter =
    (text = "Click on button") =>
    async () => {
        alert(text);
    };

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const todos = await getTodosFromDB();
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        displayAlter(e);
    }
};

export const addTodoRequest = (text) => async (dispatch, getState) => {
    try {
        const todo = await addTodoToDB(text);
        dispatch(createTodo(todo));
    } catch (e) {
        alert(e);
    }
};

export const deleteTodoRequest = (todoID) => async (dispatch, getState) => {
    try {
        await deleteTodoFromDB(todoID);
        dispatch(removeTodo(todoID));
    } catch (e) {
        alert(e);
    }
};

export const requestMarkTodoAsComplete = (todoID) => async (dispatch, getState) => {
    try {
        await markTodoAsCompleteInDB(todoID);
        dispatch(markTodoComplete(todoID));
    } catch (e) {
        alert(e);
    }
};
