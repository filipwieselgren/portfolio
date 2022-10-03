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
      buildTxt: string;
      topics: [
        { topicid: number; language: string },
        { topicid: number; language: string },
        { topicid: number; language: string },
        { topicid: number; language: string },
        { topicid: number; language: string }
      ];
    },
    {
      id: number;
      name: string;
      html_url: string;
      description: string;
      buildTxt: string;
      topics: [
        { topicid: number; language: string },
        { topicid: number; language: string },
        { topicid: number; language: string },
        { topicid: number; language: string },
        { topicid: number; language: string }
      ];
    }
  ];
}

export default IHeroText;
