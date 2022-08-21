import { langImages } from "../models/languages";
import me from "../assets/me.png";
import HeroBtns from "./HeroBtns";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scale, setScale] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      scaleImg();
    }, 2000);
  }, []);

  const scaleImg = () => {
    setScale(true);
  };

  let scaleLang: string = "pg-lang";

  if (scale === true) {
    scaleLang = "pg-lang-scale";
  }

  const languageHtml = langImages.map((lang) => {
    return (
      <img
        key={lang.id}
        src={lang.photo}
        alt="Images of programming languages"
        className={scaleLang}
      />
    );
  });

  return (
    <>
      <section className="hero-container">
        <div className="hero-intro-container">
          <div className="hero-intro-txt">
            Glad to see you here! My name is Filip, I’m a front end
            developer-student with skills in ...
          </div>
          <div className="pg-lang-container">{languageHtml}</div>
        </div>
        <div className="box-con">
          <div className="green-box"></div>
          <div className="content-green-box-con">
            <img className="me" src={me} alt="Image of me" />
            <span className="nav-text-btn">What would you like to do?</span>
          </div>
        </div>
        <HeroBtns />
      </section>
    </>
  );
};

export default Hero;
