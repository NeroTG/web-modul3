import React from "react";
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Home from "../Pages/Home";

function Navbar() {
  return (
    <BrowserRouter>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light bg-light fixed-top">
        <ul className="nav-links mx-4">
          <li className="nav-item">
            <img src="Assets/logo-ilab.png" className="logo" alt="Logo iLab" />
          </li>
        </ul>
        <ul className="nav-links nav-center">
          <li className="nav-item fw-bold text-dark mx-4">
            <NavLink
              to="/"
              activeClassName="active-link"
              className="btn btn-light text-dark fw-bold fs-6 "
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item fw-bold text-dark mx-4">
            <NavLink
              to="/about"
              activeClassName="active-link"
              className="btn btn-light text-dark fw-bold  fs-6"
            >
              Tentang
            </NavLink>
          </li>
          <li className="nav-item fw-bold text-dark mx-4">
            <NavLink
              to="/contact"
              activeClassName="active-link"
              className="btn btn-light text-dark fw-bold  fs-6"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="nav-links  nav-center">
          <li>
            <a href className="btn btn-light text-dark fw-bold  fs-6">
              Sign Up
            </a>
          </li>
          <li>
            <a href className="btn  btn-primary text-light fw-bold mx-5 fs-6">
              Login
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
