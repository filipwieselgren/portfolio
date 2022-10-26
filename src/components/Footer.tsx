import me from "../assets/me.png";

interface IScroll {
  toProjects(): void;
}

export const Footer = (props: IScroll) => {
  return (
    <div className="footer-main-container">
      <div className="img-container">
        <img src={me} alt="" className="footer-img" />
      </div>

      <ul className="text-ul">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/resume">
          <li>Resume</li>
        </a>
        <a href="/about">
          <li>About me</li>
        </a>
        <a onClick={props.toProjects}>
          <li>Projects</li>
        </a>
      </ul>
    </div>
  );
};
