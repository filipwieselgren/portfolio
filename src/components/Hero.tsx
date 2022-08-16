import { langImages } from "../models/languages";
import me from "../assets/me.png";

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
          <img className="me" src={me} alt="Image of me" />
          <div className="green-box"></div>
        </div>
      </section>

      <button>See my work</button>
      <button>Download my CV</button>
      <button>Read more abot me</button>
      <button>Contact me</button>
    </>
  );
};

export default Hero;
