import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import Navigator from "./components/ui/Navigator";
import HomePage from "./components/ui/HomePage";
import AboutPage from "./components/ui/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const store = configureStore();
    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loadinng..</div>} persistor={persistor}>
                <div className="App">
                    <Router>
                        <Navigator />
                        <Routes>
                            <Route path="/" element={<HomePage />}></Route>
                            <Route path="/about" element={<AboutPage />}></Route>
                        </Routes>
                    </Router>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
