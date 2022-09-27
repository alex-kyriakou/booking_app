import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">KoukosBooking</span>
        <div className="navItems">
          <button className="navBtn">Register</button>
          <button className="navbtn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
