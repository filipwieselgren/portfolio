import { IconType } from "react-icons";

interface IHeroText {
  id: number;
  language: string;
  welcome: string;
  maintext: string;
  askvisitor: string;
  changeLanguageText: string;
  frontEnd: string;
  callMe: string;
  stayInTouch: string;
  phoneText: string;
  aboutMeIntroText: string;
  heroSeeMyProjects: string;
  heroReadAboutMe: string;
  heroResume: string;
  heroMobileSeeMyProjects: string;
  heroMobileReadAboutMe: string;
  heroMobileResume: string;
  footerHome: string;
  footerResume: string;
  footerAbout: string;
  footerProjects: string;
  btntext: [
    {
      btnid: number;
      text: string;
    },
    {
      btnid: number;
      text: string;
    },
    {
      btnid: number;
      text: string;
    },
    {
      btnid: number;
      text: string;
    }
  ];
  projects: [
    {
      id: number;
      name: string;
      html_url: string;
      gitHub_url: string;
      description: string;
      img: string;
      buildTxt: string;
      testAppBtnText: string;
      seeCodeBtnText: string;
      buildWith: [
        { topicid: number; language: IconType },
        { topicid: number; language: IconType },
        { topicid: number; language: IconType }
      ];
    },
    {
      id: number;
      name: string;
      html_url: string;
      gitHub_url: string;
      description: string;
      img: string;
      buildTxt: string;
      testAppBtnText: string;
      seeCodeBtnText: string;
      buildWith: [
        { topicid: number; language: IconType },
        { topicid: number; language: IconType },
        { topicid: number; language: IconType }
      ];
    },
    {
      id: number;
      name: string;
      html_url: string;
      gitHub_url: string;
      description: string;
      img: string;
      buildTxt: string;
      testAppBtnText: string;
      seeCodeBtnText: string;
      buildWith: [
        { topicid: number; language: IconType },
        { topicid: number; language: IconType },
        { topicid: number; language: IconType }
      ];
    }
  ];
  aboutMe: [
    {
      id: number;
      question: string;
      answer: string;
    },
    {
      id: number;
      question: string;
      answer: string;
    },
    {
      id: number;
      question: string;
      answer: string;
    },
    {
      id: number;
      question: string;
      answer: string;
    }
  ];
}

export default IHeroText;
