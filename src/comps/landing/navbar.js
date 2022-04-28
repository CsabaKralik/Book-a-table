import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <header id="navbar">
      {props.booking ? (
        <a href="Book-a-table#Landing">Home</a>
      ) : (
        <a href="#Landing">Home</a>
      )}
      {props.booking ? (
        <a href="Book-a-table#Intro">Introduction</a>
      ) : (
        <a href="#Intro">Introduction</a>
      )}
      {props.booking ? (
        <a href="Book-a-table#Menu">Menu</a>
      ) : (
        <a href="#Menu">Menu</a>
      )}

      <Link to="/Booking">Booking</Link>
    </header>
  );
}

export default Navbar;
