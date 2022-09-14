import IHeroTextInterface from "./IHeroTextInterface";
const heroEnglishText: IHeroTextInterface[] = [
  {
    id: 1,
    using: false,
    welcome: "Welcome to my portfolio",
    maintext:
      "Glad to see you here! My name is Filip, I’m a front end developer-student with skills in ...",
    askvisitor: "What would you like to do?",
    changeLanguageText: "Switch to Swedish",
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
  },
];
const heroSwedishText: IHeroTextInterface[] = [
  {
    id: 2,
    using: true,
    welcome: "Välkommen till min portfolio",
    maintext:
      "Kul att se dig här! Mitt namn är Filip, jag är en front end utvecklare-student med kunskap inom ...",
    askvisitor: "Vad vill du göra?",
    changeLanguageText: "Ändra till engelska",
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
  },
];

export const heroText = { heroSwedishText, heroEnglishText };
