import navimg from "../assets/navimg.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img
          className="navbar-img"
          src={navimg}
          alt="Navbar background image"
        />
        <span className="nav-text">Welcome to my portfolio</span>
      </nav>
    </>
  );
};

export default Navbar;
