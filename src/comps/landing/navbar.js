import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header id="navbar">
      <Link to="/">Home</Link>
      <Link to="/Menu">Menu</Link>
      <Link to="/Booking">Booking</Link>
    </header>
  );
}

export default Navbar;
