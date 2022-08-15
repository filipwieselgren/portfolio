import { langImages } from "../models/languages";

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
            developer-student. I have skills in ...
          </div>
          <div className="pg-lang-container">{languageHtml}</div>
        </div>
      </section>
    </>
  );
};

export default Hero;
