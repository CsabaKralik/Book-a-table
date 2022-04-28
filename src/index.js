import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./comps/landing/navbar";
import Footer from "./comps/footer/footer";

//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./comps/booking/Booking";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
