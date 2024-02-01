import React from "react";
import "./Home.css";
import avatar from "../../Assets/Images/avataaars.svg";

export default function Home() {
  return (
    <section className="home min-vh-100 pt-5 text-white ">
      <div className="mt-5 w-25 m-auto d-flex justify-content-center align-items-center flex-column ">
        <img src={avatar} alt="avatar" className="w-75 my-4" />
        <h2 className="fw-bolder mb-4">START FRAMEWORK</h2>
        <div className="d-flex justify-content-center align-items-center mb-4 ">
          <div className="line mx-2 "></div>
          <i className="fa-solid fa-star mx-2 "></i>
          <div className="line mx-2 "></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
