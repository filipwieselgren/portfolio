import { heroText } from "../../models/IActiveLanguage";
import { createSlice } from "@reduxjs/toolkit";
import IHeroText from "../../models/IHeroTextInterface";

export interface IState {
  changeLanguage: IValue;
}
export interface IValue {
  value: string;
  languages: IHeroText[];
}

export const changeLanguageSlice = createSlice({
  name: "languages",
  initialState: {
    value: "english",
    languages: [heroText.heroEnglishText, heroText.heroSwedishText],
  },
  reducers: {
    toggleLanguage: (state) => {
      state.value === "swedish"
        ? (state.value = "english")
        : (state.value = "swedish");
    },

    // lägg till en funktion för mitt språkobjekt
  },
});

export const { toggleLanguage } = changeLanguageSlice.actions;

export default changeLanguageSlice.reducer;
