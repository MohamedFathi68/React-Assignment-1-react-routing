import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4 fixed-top">
      <div className="container">
        <Link className="navbar-brand fs-2 fw-bold " to="">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link fs-5 fw-medium text-white "
                to={"about"}
                aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-medium text-white " to="portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-medium text-white " to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
