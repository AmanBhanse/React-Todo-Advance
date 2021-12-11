import { createStore, combineReducers } from "redux";
import { todos } from "./todos/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import automergerLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

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
    createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
