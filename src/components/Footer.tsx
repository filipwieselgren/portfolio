import me from "../assets/me.png";

export const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="img-container">
        <img src={me} alt="" className="footer-img" />
      </div>

      <ul className="text-ul">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="">
          <li>Resume</li>
        </a>
        <a href="#projects">
          <li>About me</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
      </ul>
    </div>
  );
};
