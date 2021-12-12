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
