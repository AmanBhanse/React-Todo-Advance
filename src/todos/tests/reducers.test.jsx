import { expect } from "chai";
import { todos } from "../reducers";

describe("The Todos reducers", () => {
    it("Adds a new TODO When CREATE_TODO action is received", () => {
        const testTodo = { text: "test CREATE_TODO reducer", isCompleted: false };
        const testCreateTodoAction = {
            type: "CREATE_TODO",
            payload: {
                todo: testTodo,
            },
        };

        const originalState = { isLoading: false, data: [] };

        const expected = {
            isLoading: false,
            data: [testTodo],
        };

        const actual = todos(originalState, testCreateTodoAction);

        // eslint-disable-next-line jest/valid-expect
        expect(actual).to.deep.equal(expected);
    });
});
