import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos } from "./components/todos/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import automergerLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
    todos,
};

const persistCongfig = {
    key: "root",
    storage,
    stateReconciler: automergerLevel2,
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistCongfig, rootReducer);

export const configureStore = () =>
    createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
