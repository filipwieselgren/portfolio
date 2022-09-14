import { createStore, combineReducers } from "redux";

import langReducer from "./reducers/langReducer";

const rootReducer = combineReducers({
  lang: langReducer,
});

const store = createStore(rootReducer);

export type rootReducer = ReturnType<typeof rootReducer>;

export default store;
