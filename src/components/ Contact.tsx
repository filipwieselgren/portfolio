import { FaLinkedinIn, FaGithub } from "react-icons/fa/";
import { GoMail } from "react-icons/go";
import { TiPhone } from "react-icons/ti";
import { TbCoffee } from "react-icons/tb";
import { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { IState } from "../redux/reducers/reducer";

export const Contact = () => {
  let [number, setNumber] = useState(false);
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );

  let language = useSelector((state: IState) => state.changeLanguage.value);

  const getNumber = () => {
    setNumber(!number);
  };

  const phoneNumber = (
    <div className="phone-container">
      <ImCross onClick={getNumber} />
      <div className="phonenumber">
        {languageArray.map((lang) =>
          lang.language === language ? lang.callMe : <></>
        )}
      </div>
    </div>
  );

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">
          {languageArray.map((lang) =>
            lang.language === language ? lang.stayInTouch : <></>
          )}
        </h1>

        <div className="contact-icons-container">
          {number ? (
            phoneNumber
          ) : (
            <>
              <a
                href="mailto: filipwieselgren@gmail.com"
                target="_blank"
                className="circle-container"
              >
                <div className="icon-circle">
                  <GoMail />
                </div>
                <p className="circle-text">Email</p>
              </a>
              <a
                onClick={getNumber}
                href="tel:076-060-4418"
                className="circle-container"
              >
                <div className="icon-circle">
                  <TiPhone />
                </div>
                <p className="circle-text">
                  {languageArray.map((lang) =>
                    lang.language === language ? lang.phoneText : <></>
                  )}
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/filipwieselgren/"
                target="_blank"
                className="circle-container"
              >
                <div className="icon-circle">
                  <FaLinkedinIn className="icon" />
                </div>
                <p className="circle-text">Linkedin</p>
              </a>
              <a
                href="https://github.com/filipwieselgren"
                target="_blank"
                className="circle-container"
              >
                <div className="icon-circle">
                  <FaGithub />
                </div>
                <p className="circle-text">Github</p>
              </a>
            </>
          )}
        </div>
      </div>
      {/* <a
            href="https://www.linkedin.com/in/filipwieselgren/"
            target="_blank"
            className="circle-container"
          >
            <div className="icon-circle">
              <TbCoffee />
            </div>
            <p className="circle-text">Coffee</p>
          </a> */}
    </section>
  );
};
