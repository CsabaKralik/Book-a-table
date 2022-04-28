import { compareDate } from "./compareDate";

const regex = /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validateFormData = (formData, setFormData, setModalOpen) => {
  const date = new Date(formData.date);
  setFormData({
    ...formData,
    nameErr: formData.name.length === 0 ? "Name is required" : "",
    emailErr:
      formData.email.length === 0
        ? "Email is required"
        : regex.test(formData.email)
        ? ""
        : "Wrong email format",
    dateErr:
      formData.date.length === 0
        ? "Date is required"
        : compareDate(date)
        ? ""
        : "Booking date must be at least 1h from now",
    guestsErr:
      formData.guests.length === 0
        ? "Guests is required"
        : formData.guests <= 0
        ? "Minimum guests: 1"
        : "",
  });

  const isValid =
    formData.name.length !== 0 &&
    (formData.email.length !== 0 || regex.test(formData.email)) &&
    formData.date.length !== 0 &&
    compareDate(date) === true &&
    formData.guests.length !== 0;

  setModalOpen(isValid);
};
