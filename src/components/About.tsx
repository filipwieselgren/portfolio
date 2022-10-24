import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../redux/reducers/reducer";
import { BsCaretUp, BsCaretDown } from "react-icons/bs/";

export const About = () => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );
  const [isOpen, setIsOpen] = useState(false);

  // let open = "";
  // if (isOpen) {
  //   open = "open";
  // } else {
  //   open = "not-open";
  // }

  let open = <></>;

  const test = (id: number) => {
    setIsOpen(!isOpen);
    languageArray.map((lang) =>
      lang.aboutMe.filter((about) => {
        return about.id === id ? (open = <div>{about.answer}</div>) : <></>;
      })
    );
  };

  let language = useSelector((state: IState) => state.changeLanguage.value);
  return (
    <>
      {languageArray.map((lang) => {
        return lang.language === language ? (
          lang.aboutMe.map((about) => (
            <button key={about.id} onClick={() => test(about.id)}>
              {`0${about.id}`}
              {about.question}
              <BsCaretDown />
              {isOpen ? open : <></>}
            </button>
          ))
        ) : (
          <></>
        );
      })}
    </>
  );
};
