import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from "./actions";
import { todosColRef, getTodosFromDB } from "./firebase";

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
