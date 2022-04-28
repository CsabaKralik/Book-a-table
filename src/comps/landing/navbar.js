import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header id="navbar">
      <a href="Book-a-table#Landing">Home</a>
      <a href="Book-a-table#Intro">Introduction</a>
      <a href="Book-a-table#Menu">Menu</a>
      <Link to="/Booking">Booking</Link>
    </header>
  );
}

export default Navbar;
