import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="home min-vh-100 pt-5 d-flex justify-content-center align-items-center flex-column text-white ">
      <div className="container my-5">
        <div className="mt-5 m-auto d-flex justify-content-center align-items-center flex-column ">
          <h1 className="fw-bolder mb-4">ABOUT COMPONENT</h1>
          <div className="d-flex justify-content-center align-items-center mb-4 ">
            <div className="line mx-2 "></div>
            <i className="fa-solid fa-star mx-2 "></i>
            <div className="line mx-2 "></div>
          </div>
          <div className="row">
            <div className="col-md-6 px-5 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 px-5 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
