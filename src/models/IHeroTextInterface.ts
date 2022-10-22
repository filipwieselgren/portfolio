import { IconType } from "react-icons";

interface IHeroText {
  id: number;
  language: string;
  welcome: string;
  maintext: string;
  askvisitor: string;
  changeLanguageText: string;
  frontEnd: string;
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
      description: string;
      img: string;
      buildTxt: string;
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
      description: string;
      img: string;
      buildTxt: string;
      buildWith: [
        { topicid: number; language: IconType },
        { topicid: number; language: IconType },
        { topicid: number; language: IconType }
      ];
    }
  ];
}

export default IHeroText;
