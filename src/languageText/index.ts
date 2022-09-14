import en from "./en.json";
import sv from "./sv.json";

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if (language === "EN") {
    langData = en;
  } else if (language === "SV") {
    langData = sv;
  }

  return langData[key];
};
