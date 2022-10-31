import IHeroText from "./IHeroTextInterface";
import todoImg from "../assets/todo.png";
import webshopImg from "../assets/webshop.png";
import feedTheZooImg from "../assets/feed-the-zoo.png";
import { FaReact, FaSass } from "react-icons/fa";

import {
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiStyledcomponents,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const heroEnglishText: IHeroText = {
  id: 1,
  language: "english",
  welcome: "Hi there,",
  maintext:
    "I study front end development at Medieinstitutet in Stockholm Sweden with focus on the mern-stack.",
  askvisitor: " Switch card to see my tech-stack",
  changeLanguageText: "Switch to Swedish",
  frontEnd: "glad to see you here! My name is Filip.",
  callMe: "Give me a call at +46 76 060 44 18",
  stayInTouch: "I would love to stay in touch",
  phoneText: "Phone",
  aboutMeIntroText:
    "Curiosity is always good! Choose what you want to find out about me ...",
  heroSeeMyProjects: "See my projects",
  heroReadAboutMe: "Read more about me",
  heroResume: "See my resume",
  footerHome: "Home",
  footerResume: "Resume",
  footerAbout: "About",
  footerProjects: "Project",
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
      text: "Read more about me",
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
      gitHub_url: "https://github.com/filipwieselgren/webshop",
      description: "A webshop for movies build with react and typescript.",
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
      gitHub_url: "https://github.com/filipwieselgren/TODO",
      description: "My first project in JS. A todo-app.",
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
          language: FaSass,
        },
      ],
    },
    {
      id: 3,
      name: "Game - Feed the zoo",
      html_url: "https://react-zoo-sable.vercel.app/",
      gitHub_url: "https://github.com/filipwieselgren/react-zoo",
      description:
        "A game built using React, typescript and styled-components.",
      img: feedTheZooImg,
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
          language: SiStyledcomponents,
        },
      ],
    },
  ],

  aboutMe: [
    {
      id: 1,
      question: "How are you to work with?",
      answer:
        "I strive for development, both personal and from a team perspective. In practice this means that I work hard to achieve what's expected of me and . I consider my self as a good team player as well.",
      open: false,
    },
    {
      id: 2,
      question: "What can you bring to the table?",
      answer:
        "If you are looking for a developer that has experience with Javascript/Typescript, React and Node.js you have come to the right place. Besides that I can provide a good eye for UI/UX design and an analytical way of working and thinking. My prior experience from Leadoo and Trickle have also strengthened these two characteristics. I will also bring a lot of curiosity to develop as a person and developer.",
      open: false,
    },
    {
      id: 3,
      question: "What is your background?",
      answer:
        "I have a background in Saas, marketing, communication and onboarding. For the last two and a half years I have been working at the Saas company Leadoo Marketing Technologies where I onboarded clients to Leadoo's platform, helped them implement the solution that Leadoo provide on clients' websites and built chabots which has affected thousands of people to get a better experince on websites. Please check my resume to read more about my background.",
      open: false,
    },
    {
      id: 4,
      question: "What do you like to do when you aren't working?",
      answer:
        "When I'm not working I like to do some kind of sport activity, work out, play guitar or practice my coding skills. During summer I play golf and are curently learning how to kitesurf. During winter I like to snowboard.",
      open: false,
    },
  ],
};
const heroSwedishText: IHeroText = {
  id: 2,
  language: "swedish",
  welcome: "Hej,",
  maintext:
    "Jag studerar frontend-utveckling på Medieinstitutet i Stockholm med fokus på mern-stacken.",
  askvisitor: " Byt kort för att se min tech-stack",
  changeLanguageText: "Ändra till engelska",
  frontEnd: "Filip här. Trevligt att träffas!  ",
  callMe: "Du kan ringa mig på 076 060 44 18",
  stayInTouch: "Jag håller gärna kontakten",
  phoneText: "Telefon",
  aboutMeIntroText:
    "Nyfikenhet är alltid bra! Klicka på det du vill veta om mig ...",
  heroSeeMyProjects: "See mina projekt",
  heroReadAboutMe: "Läs mer om mig",
  heroResume: "Se mitt cv",
  footerHome: "Hem",
  footerResume: "CV",
  footerAbout: "Om mig",
  footerProjects: "Projekt",
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
      gitHub_url: "https://github.com/filipwieselgren/webshop",
      description: "En webbshop för filmer byggt med React och Typscript.",
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
      gitHub_url: "https://github.com/filipwieselgren/TODO",
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
          language: FaSass,
        },
      ],
    },
    {
      id: 3,
      name: "Spel - Feed the zoo",
      html_url: "https://react-zoo-sable.vercel.app/",
      gitHub_url: "https://github.com/filipwieselgren/react-zoo",
      description:
        "Ett spel byggt med React, Typescript och styled-components.",
      img: feedTheZooImg,
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
  ],

  aboutMe: [
    {
      id: 1,
      question: "Hur är du att jobba med?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      open: false,
    },
    {
      id: 2,
      question: "Hur är du att jobba med?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      open: false,
    },
    {
      id: 3,
      question: "Hur är du att jobba med?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      open: false,
    },
    {
      id: 4,
      question: "Hur är du att jobba med?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      open: false,
    },
  ],
};

export const heroText = { heroSwedishText, heroEnglishText };
