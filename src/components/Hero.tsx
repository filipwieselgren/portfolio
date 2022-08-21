import { langImages } from "../models/languages";
import me from "../assets/me.png";
import HeroBtns from "./HeroBtns";

const Hero = () => {
  const languageHtml = langImages.map((lang) => {
    return (
      <img
        key={lang.id}
        src={lang.photo}
        alt="Images of programming languages"
        className="pg-lang"
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
          <img className="me" src={me} alt="Image of me" />
          <span className="nav-text-btn">What would you like to do?</span>
        </div>
        <HeroBtns />
      </section>
    </>
  );
};

export default Hero;
