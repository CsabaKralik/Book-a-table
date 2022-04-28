import { useState } from "react";
import { Link } from "react-router-dom";
import { validateFormData } from "../../utils/validate";
import { formatDate } from "../../utils/formatDate";
import Input from "./Input";
import bookingImg from "../../images/booking.jpg";
import "./booking.css";
import FormTitle from "./FormTitle";
import Navbar from "../landing/navbar";
function Booking() {
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
    nameErr: "",
    emailErr: "",
    dateErr: "",
    guestsErr: "",
  });

  const updateFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateFormData(formData, setFormData, setModalOpen);
  };

  return (
    <main className="Booking">
      <Navbar booking="true" />
      <img src={bookingImg} alt="pizzeria tables" />
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormTitle />
        <Input
          labelText="Name"
          type="text"
          autoFocus
          name="name"
          value={formData.name}
          onChange={(event) => updateFormData(event)}
          errorMsg={formData.nameErr}
        />
        <Input
          labelText="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(event) => updateFormData(event)}
          errorMsg={formData.emailErr}
          animationDelay={"150ms"}
        />
        <Input
          labelText="Date"
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={(event) => updateFormData(event)}
          errorMsg={formData.dateErr}
          animationDelay={"300ms"}
        />
        <Input
          labelText="Guests"
          type="number"
          name="guests"
          value={formData.guests}
          onChange={(event) => updateFormData(event)}
          errorMsg={formData.guestsErr}
          animationDelay={"450ms"}
        />
        <button>BOOK NOW</button>
      </form>
      {modalOpen && (
        <div className="modal">
          <div>
            <h2>Your Booking Was Succesful</h2>
            <div className="datas">
              <p>Name:</p>
              <p>{formData.name}</p>
              <p>Email:</p>
              <p>{formData.email}</p>
              <p>Date:</p>
              <p>{formatDate(formData.date)}</p>
              <p>Guests:</p>
              <p>{formData.guests}</p>
            </div>
            <Link to="/">BACK TO HOME</Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Booking;
