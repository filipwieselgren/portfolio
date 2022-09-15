import { configureStore } from "@reduxjs/toolkit";
import changeLanguageReducer from "../reducers/reducer";

export default configureStore({
  reducer: { changeLanguage: changeLanguageReducer },
});
