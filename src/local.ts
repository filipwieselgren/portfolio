export const getFromLocal = () => {
  return JSON.parse(localStorage.getItem("activeLanguage") || "");
};
