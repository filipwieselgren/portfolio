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
}

export default IHeroText;
