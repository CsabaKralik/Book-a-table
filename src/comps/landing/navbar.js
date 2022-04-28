import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header id="navbar">
      <a href="#Landing">Home</a>
      <a href="#Intro">Introduction</a>
      <a href="#Menu">Menu</a>
      <Link to="/Booking">Booking</Link>
    </header>
  );
}

export default Navbar;
