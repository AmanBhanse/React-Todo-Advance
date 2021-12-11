import "./App.css";
import NewTodoForm from "./todos/NewTodoForm";
import TodoList from "./todos/TodoList";

function App() {
    return (
        <div className="App">
            <NewTodoForm />
            <TodoList />
        </div>
    );
}

export default App;
