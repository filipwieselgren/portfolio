import { IAction } from "../../models/IAction";
import IHeroTextInterface from "../../models/IHeroTextInterface";
import { heroText } from "../../models/IHeroText";
import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export const changeLanguageSlice = createSlice({
  name: "languages",
  initialState: {
    value: {
      language: heroText.heroEnglishText,
    },
  },
  reducers: {
    swedish: (state, action) => {
      state.value.language = heroText.heroSwedishText;
    },

    english: (state, action) => {
      state.value.language = heroText.heroEnglishText;
    },
  },
});

export const { swedish, english } = changeLanguageSlice.actions;

export default changeLanguageSlice.reducer;
