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
        <div className="nav-text-container">
          <span className="nav-text">Welcome to my portfolio</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
