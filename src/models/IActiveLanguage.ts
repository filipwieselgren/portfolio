import IHeroText from "./IHeroTextInterface";
import todoImg from "../assets/todo.img.png";
import webshopImg from "../assets/webshop.png";

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
      text: "See my projects",
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
  projects: [
    {
      id: 1,
      name: "webshop",
      html_url: "https://webshop-seven.vercel.app/",
      description: "A webshop for movies build with react and typescript",
      img: webshopImg,
      buildTxt: "Built with",
      topics: [
        {
          topicid: 1,
          language: "/static/media/react.svg.dff8c2d70a3a8ec4026e.png",
        },
        {
          topicid: 2,
          language:
            "/static/media/Typescript_logo_2020.svg.f11fa7a0c5593ab7cb15.png",
        },
        {
          topicid: 3,
          language: "/static/media/css-logo.f84f23c3069a2d6dad20.png",
        },
        {
          topicid: 4,
          language: "",
        },
        {
          topicid: 5,
          language: "",
        },
      ],
    },
    {
      id: 2,
      name: "Todo-app",
      html_url: "https://todo-eta-six.vercel.app/",
      description: "My first project in JS. A todo-app",
      img: todoImg,
      buildTxt: "Built with",
      topics: [
        {
          topicid: 1,
          language: "/static/media/js-logo.7bab731c14a3382b0ef3.png",
        },
        {
          topicid: 2,
          language: "/static/media/sass.logo.b795e8df3332ef356023.png",
        },
        {
          topicid: 3,
          language: "",
        },
        {
          topicid: 4,
          language: "",
        },
        {
          topicid: 5,
          language: "",
        },
      ],
    },
  ],
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
  projects: [
    {
      id: 1,
      name: "Webshop",
      html_url: "https://webshop-seven.vercel.app/",
      description: "En webbshop för filmer byggt med React och Typscript",
      img: webshopImg,
      buildTxt: "Byggt med",
      topics: [
        {
          topicid: 1,
          language: "/static/media/react.svg.dff8c2d70a3a8ec4026e.png",
        },
        {
          topicid: 2,
          language:
            "/static/media/Typescript_logo_2020.svg.f11fa7a0c5593ab7cb15.png",
        },
        {
          topicid: 3,
          language: "/static/media/css-logo.f84f23c3069a2d6dad20.png",
        },
        {
          topicid: 4,
          language: "",
        },
        {
          topicid: 5,
          language: "",
        },
      ],
    },
    {
      id: 2,
      name: "Todo-app",
      html_url: "https://todo-eta-six.vercel.app/",
      description: "Mitt första projekt i JS. En todo-app.",
      img: todoImg,
      buildTxt: "Byggt med",
      topics: [
        {
          topicid: 1,
          language: "/static/media/js-logo.7bab731c14a3382b0ef3.png",
        },
        {
          topicid: 2,
          language: "/static/media/sass.logo.b795e8df3332ef356023.png",
        },
        {
          topicid: 3,
          language: "",
        },
        {
          topicid: 4,
          language: "",
        },
        {
          topicid: 5,
          language: "",
        },
      ],
    },
  ],
};

export const heroText = { heroSwedishText, heroEnglishText };
