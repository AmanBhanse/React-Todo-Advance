import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo } from "./actions";
import { getTodosFromDB, addTodoToDB } from "./firebase";

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
