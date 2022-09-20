import IHeroText from "./IHeroTextInterface";

const heroEnglishText: IHeroText = {
  id: 1,
  language: "english",
  welcome: "Welcome to my portfolio",
  maintext:
    "Glad to see you here!  I study front end development at Medieinstitutet in Stockholm and currently have skills in  ...",
  askvisitor: "What would you like to do?",
  changeLanguageText: "Switch to Swedish",
  frontEnd: "Front End Developer",
  btntext: [
    {
      btnid: 1,
      text: "See my work",
    },
    {
      btnid: 2,
      text: "See my resume",
    },
    {
      btnid: 3,
      text: "Read more abot me",
    },
    {
      btnid: 4,
      text: "Contact me",
    },
  ],
};
const heroSwedishText: IHeroText = {
  id: 2,
  language: "swedish",
  welcome: "Välkommen till min portfolio",
  maintext:
    "Kul att se dig här! Jag studerar frontend-utveckling på Medieinstitutet i Stockholm och har för tillfället kompetens inom ...",
  askvisitor: "Vad vill du göra?",
  changeLanguageText: "Ändra till engelska",
  frontEnd: "Frontend Utvecklare",
  btntext: [
    {
      btnid: 1,
      text: "Se mina projekt",
    },
    {
      btnid: 2,
      text: "Se mitt CV",
    },
    {
      btnid: 3,
      text: "Läs mer om mig",
    },
    {
      btnid: 4,
      text: "Kontakta mig",
    },
  ],
};

export const heroText = { heroSwedishText, heroEnglishText };
