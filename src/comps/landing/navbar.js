import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  let booking = false;
  if (props.booking === "true") {
    booking = true;
  }
  return (
    <header id="navbar">
      {booking ? (
        <a href="Book-a-table#Landing">Home</a>
      ) : (
        <a href="#Landing">Home</a>
      )}
      {booking ? (
        <a href="Book-a-table#Intro">Introduction</a>
      ) : (
        <a href="#Intro">Introduction</a>
      )}
      {booking ? (
        <a href="Book-a-table#Menu">Menu</a>
      ) : (
        <a href="#Menu">Menu</a>
      )}

      <Link to="/Booking">Booking</Link>
    </header>
  );
}

export default Navbar;
