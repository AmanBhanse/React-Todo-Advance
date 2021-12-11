import "./App.css";
import NewTodoForm from "./todos/NewTodoForm";
import TodoList from "./todos/TodoList";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
    const store = configureStore();
    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loadinng..</div>} persistor={persistor}>
                <div className="App">
                    <NewTodoForm />
                    <TodoList />
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
