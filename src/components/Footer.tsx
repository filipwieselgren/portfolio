import me from "../assets/me.png";

export const Footer = () => {
  return (
    <div className="footer-main-container">
      <img src={me} alt="" className="footer-img" />

      <ul className="text-ul">
        <li>Home</li>
        <li>Resume</li>
        <li>About me</li>
        <li>Projets</li>
      </ul>
    </div>
  );
};
