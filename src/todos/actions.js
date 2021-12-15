export const CREATE_TODO = "CREATE_TODO";

export const createTodo = (text) => {
    return { type: CREATE_TODO, payload: { text } };
};

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = (text) => {
    return { type: REMOVE_TODO, payload: { text } };
};

export const MARK_TODO_COMPLETE = "MARK_TODO_COMPLETE";

export const markTodoComplete = (text) => {
    return { type: MARK_TODO_COMPLETE, payload: { text } };
};

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";

export const loadTodosInProgress = () => {
    return { type: LOAD_TODOS_IN_PROGRESS };
};

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";

export const loadTodosSuccess = (todos) => {
    return { type: LOAD_TODOS_SUCCESS, payload: { todos } };
};

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";

export const loadTodosFailure = () => {
    return { type: LOAD_TODOS_FAILURE };
};
