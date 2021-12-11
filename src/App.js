import "./App.css";
import NewTodoForm from "./todos/NewTodoForm";
import TodoList from "./todos/TodoList";
import { Provider } from "react-redux";
import { configureStore } from "./store";

function App() {
    return (
        <Provider store={configureStore()}>
            <div className="App">
                <NewTodoForm />
                <TodoList />
            </div>
        </Provider>
    );
}

export default App;
