import { heroText } from "../../models/IActiveLanguage";
import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  changeLanguage: IValue;
}
export interface IValue {
  value: string; // Ändra denna så den stämmer överens med mitt value i mitt initialState
}

export const changeLanguageSlice = createSlice({
  name: "languages",
  initialState: {
    value: "english", // Gör om till ett objekt med srpåkobjekten och min string "english"
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
