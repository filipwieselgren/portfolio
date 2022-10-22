import IHeroText from "./IHeroTextInterface";
import todoImg from "../assets/todo.png";
import webshopImg from "../assets/webshop.png";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiCss3, SiTypescript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const heroEnglishText: IHeroText = {
  id: 1,
  language: "english",
  welcome: "Hi there,",
  maintext:
    "I study front end development at Medieinstitutet in Stockholm Sweden with focus on the mern-stack.",
  askvisitor: " Switch card to see my tech-stack",
  changeLanguageText: "Switch to Swedish",
  frontEnd: "my name is Filip. Glad to see you here!",
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
      name: "Webshop",
      html_url: "https://webshop-seven.vercel.app/",
      description: "A webshop for movies build with react and typescript",
      img: webshopImg,
      buildTxt: "Built with",
      testAppBtnText: "Test app",
      seeCodeBtnText: "See code",
      buildWith: [
        {
          topicid: 1,
          language: FaReact,
        },
        {
          topicid: 2,
          language: SiTypescript,
        },
        {
          topicid: 3,
          language: SiCss3,
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
      testAppBtnText: "Test app",
      seeCodeBtnText: "See code",
      buildWith: [
        {
          topicid: 1,
          language: SiJavascript,
        },
        {
          topicid: 2,
          language: TiHtml5,
        },
        {
          topicid: 3,
          language: SiCss3,
        },
      ],
    },
  ],
};
const heroSwedishText: IHeroText = {
  id: 2,
  language: "swedish",
  welcome: "Hej,",
  maintext:
    "Jag studerar frontend-utveckling på Medieinstitutet i Stockholm med fokus på mern-stacken. Byt kort för att se min tech stack.",
  askvisitor: " Byt kort för att se min tech-stack",
  changeLanguageText: "Ändra till engelska",
  frontEnd: "Filip här. Trevligt att träffas!",
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
      buildTxt: "Byggd med",
      testAppBtnText: "Testa appen",
      seeCodeBtnText: "Se koden",
      buildWith: [
        {
          topicid: 1,
          language: FaReact,
        },
        {
          topicid: 2,
          language: SiTypescript,
        },
        {
          topicid: 3,
          language: SiCss3,
        },
      ],
    },
    {
      id: 2,
      name: "Todo-app",
      html_url: "https://todo-eta-six.vercel.app/",
      description: "Mitt första projekt i JS. En todo-app.",
      img: todoImg,
      buildTxt: "Byggd med",
      testAppBtnText: "Testa appen",
      seeCodeBtnText: "Se koden",
      buildWith: [
        {
          topicid: 1,
          language: SiJavascript,
        },
        {
          topicid: 2,
          language: TiHtml5,
        },
        {
          topicid: 3,
          language: SiCss3,
        },
      ],
    },
  ],
};

export const heroText = { heroSwedishText, heroEnglishText };
