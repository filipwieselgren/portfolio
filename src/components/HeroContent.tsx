import { useSelector } from "react-redux";
import { IState } from "../redux/reducers/reducer";

export const HeroContent = () => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );
  let language = useSelector((state: IState) => state.changeLanguage.value);
  return (
    <>
      {languageArray.map((lang) => {
        return lang.language === language ? (
          <div key={lang.id} className="presentation-text-container">
            <div className="presentation-text">{lang.maintext}</div>
          </div>
        ) : (
          <></>
        );
      })}
    </>
  );
};
