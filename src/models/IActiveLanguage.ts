import IHeroText from "./IHeroTextInterface";
import todoImg from "../assets/todo.png";
import webshopImg from "../assets/webshop.png";
import feedTheZooImg from "../assets/game.png";
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
    "Curiosity is always good and I would love to tell you more about me! Choose what you want to find out about me ...",
  heroSeeMyProjects: "See my projects",
  heroReadAboutMe: "Read more about me",
  heroResume: "See my resume",
  heroMobileSeeMyProjects: "Projects",
  heroMobileReadAboutMe: "About me",
  heroMobileResume: "My resume",
  footerHome: "Home",
  footerResume: "Resume",
  footerAbout: "About",
  footerProjects: "Projects",
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
      description:
        "A fictional webshop for movies build with React and Typescript. Working with API, localStorage and various array methods.",
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
      description:
        "A todo-app where you can create a list with todos, set deadlines and sort by deadline. Working with localStorage, dates and various array methods.",
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
        "A game built with React, Typescript and Styled-Components. The aniamls needs to be fed after every third hour, it´s your job to keep track on that and feed them. Working with localStorage, dates and various array methods.",
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
        "I come with an analytic and a problem solving mind set. Working hard to achieve what's expected of me as a co-worker comes natural for me. I am inspired by being part of an ambitious team that are aiming for great goals.",
    },
    {
      id: 2,
      question: "What can you bring to the table?",
      answer:
        "If you are looking for a developer that have skills in JavaScript/Typescript, React and Node.js, you have come to the right place. I can also provide a good eye for UI/UX design. I am trained in an analytical way of working and thinking, something that I also have been able to develop at my earlier employments at Leadoo and Trickle.",
    },
    {
      id: 3,
      question: "What is your background?",
      answer:
        "I have a background in SaaS, marketing, communication and onboarding. For the last two and a half years I have been working at the SaaS company Leadoo Marketing Technologies where I onboarded clients to Leadoo's platform, helped them implement Leadoo's solution to their website and built chatbots which has affected thousands of people to get a better web experience. Prior to that, I worked at a digital marketing agency called Trickle, where I took care of clients marketing campaigns on digital platforms, such as Facebook, Instagram, LinkedIn and Snapchat. For more information, If you want to know more about my background please click the button below to see my resume.",
    },
    {
      id: 4,
      question: "What do you like to do when you aren't working?",
      answer:
        "When I'm not working I love to play golf during the summer. When there is an opportunity I also like practicing my skills in kike surfing. During the winter I switch out the clubs to a snowboard and also more frequently visit the gym. Music has always been a huge part of my life and I love to pick up my guitar or practice my coding skills.",
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
    "Nyfikenhet är alltid bra och jag berättar gärna mer om mig! Välj det du vill veta om mig ...",
  heroSeeMyProjects: "See mina projekt",
  heroReadAboutMe: "Läs mer om mig",
  heroResume: "Se mitt cv",
  heroMobileSeeMyProjects: "Projekt",
  heroMobileReadAboutMe: "Om mig",
  heroMobileResume: "Mittt cv",
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
      description:
        "En fiktiv webbshop för filmer byggd med React och Typscript. Arbetar med API, localStorage och diverse array-metoder.",
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
      description:
        "En todo-app där du kan skapa en lista med todos, sätta deadlines och sortera efter deadline. Arbetar med localStorage, datum och diverse array-metoder.",
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
        "Ett spel byggt med React, Typscript och Styled-Components. Djuren behöver matas efter var tredje timme, det är ditt jobb att hålla koll på det och mata dem. Arbetat med localStorage, datum och diverse array-metoder.",
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
        "Jag bidrar med ett analytiskt och problemlösande tankesätt. Jobba hårt för att uppnå det som förväntas av mig som medarbetare kommer naturligt för mig. Jag inspireras av att vara en del av ett ambitiöst team som siktar på stora mål.",
    },
    {
      id: 2,
      question: "Vad kan du bidra med?",
      answer:
        "Om du letar efter en utvecklare som har kunskaper inom JavaScript/Typescript, React och Node.js har du kommit till rätt plats. Jag bidrar också med ett bra öga för UI/UX-design. Jag är tränad i att arbeta och tänka analytiskt, något som jag även har kunnat utveckla vid mina tidigare anställningar på Leadoo och Trickle.",
    },
    {
      id: 3,
      question: "Vad är din bakgrund?",
      answer:
        "Jag har en bakgrund inom Saas, marknadsföring, kommunikation och onboarding. Under de senaste två och ett halvt åren har jag arbetat på Saas-företaget Leadoo Marketing Technologies där jag onbordat kunder till Leadoos plattform, hjälpt dem att implementera Leadoos lösning på deras hemsida och byggt chattbotar som påverkat tusentals människor för att få en bättre webbupplevelse. Dessförinnan arbetade jag på den digitala marknadsföringsbyrån Trickel där jag tog hand om kunders marknadsföringskampanjer på digitala plattformar, såsom Facebook, Instagram, LinkedIn och Snapchat. Om du vill veta mer om min bakgrund får du gärna klicka på knappen nedan för att se mitt CV.",
    },
    {
      id: 4,
      question: "Vad tycker du om att göra när du inte jobbar?",
      answer:
        "När jag inte jobbar älskar jag att spela golf på sommaren. När det finns en möjlighet gillar jag också att träna för att bli en bättre kitesurfare. Under vintern byter jag ut klubborna till mot snowboard och besöker även oftare gymmet. Musik har alltid varit en stor del av mitt liv och jag älskar att ta upp min gitarr eller öva på mina kunskaper inom programmering.",
    },
  ],
};

export const heroText = { heroSwedishText, heroEnglishText };
