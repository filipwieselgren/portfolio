import IHeroText from "./IHeroTextInterface";

const heroEnglishText: IHeroText = {
  id: 1,
  language: "english",
  welcome: "Hi there,",
  maintext:
    "I study front end development at Medieinstitutet in Stockholm Sweden with focus on the mern-stack.",
  askvisitor: " Switch card to see my tech-stack",
  changeLanguageText: "Switch to Swedish",
  frontEnd: "I’m Filip, a front end developer",
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
  // projects: [
  //   {
  //     id: 1,
  //     name: "webshop",
  //     html_url: "https://webshop-seven.vercel.app/",
  //     description: "A webshop for movies build with react and typescript",
  //     topics: [
  //       "/static/media/react.svg.dff8c2d70a3a8ec4026e.png",
  //       "/static/media/Typescript_logo_2020.svg.f11fa7a0c5593ab7cb15.png",
  //       "/static/media/css-logo.f84f23c3069a2d6dad20.png",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Todo-app",
  //     html_url: "https://todo-eta-six.vercel.app/",
  //     description: "My first project in JS. A todo-app",
  //     topics: [
  //       "/static/media/js-logo.7bab731c14a3382b0ef3.png",
  //       "/static/media/sass.logo.b795e8df3332ef356023.png",
  //     ],
  //   },
};
const heroSwedishText: IHeroText = {
  id: 2,
  language: "swedish",
  welcome: "Hallå där,",
  maintext:
    "Jag studerar frontend-utveckling på Medieinstitutet i Stockholm med fokus på mern-stacken. Byt kort för att se min tech stack.",
  askvisitor: " Byt kort för att se min tech-stack",
  changeLanguageText: "Ändra till engelska",
  frontEnd: "Jag är Filip, en frontend-utvecklarer",
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
