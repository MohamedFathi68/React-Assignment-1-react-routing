import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="w-50 m-auto ">
      <section className="min-vh-100 pt-5 d-flex justify-content-center align-items-center flex-column ">
        <div className="container mt-5 ">
          <h1 className="fw-bolder my-4 text-center ">CONTACT COMPONENT</h1>
          <div className="d-flex justify-content-center align-items-center mb-4 ">
            <div className="line mx-2 "></div>
            <i className="fa-solid fa-star mx-2 "></i>
            <div className="line mx-2 "></div>
          </div>
          <div className="form mb-5">
            <div className="my-3">
              <input
                type="text"
                className="w-100 p-3"
                placeholder="userName"
                aria-describedby="helpId"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="w-100 p-3"
                placeholder="userAge"
                aria-describedby="helpId"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="w-100 p-3"
                placeholder="userEmail"
                aria-describedby="helpId"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="w-100 p-3"
                placeholder="userPassword"
                aria-describedby="helpId"
              />
            </div>
            <div className="my-3">
                <button
                  type="button"
                  class="btn btn-success px-2 py-1"
                >
                  send Message
                </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
