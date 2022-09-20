interface IHeroText {
  id: number;
  using: boolean;
  welcome: string;
  maintext: string;
  askvisitor: string;
  language: string;
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
