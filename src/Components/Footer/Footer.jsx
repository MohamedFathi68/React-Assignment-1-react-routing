import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="">
      <div className="container h-75 mb-5">
        <div className="row p-5 text-center text-white ">
          <div className="col-md-4 p-3 mt-5">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 p-3 mt-5">
            <h3>AROUND THE WEB</h3>
            <div>
              <ul className="d-flex list-unstyled justify-content-center  ">
                <li className="m-2">
                  <div>
                    <i class="fs-4 border border-1 border-white p-2 rounded-5  fa-brands fa-facebook"></i>
                  </div>
                </li>
                <li className="m-2">
                  <div>
                    <i class="fs-4 border border-1 border-white p-2 rounded-5  fa-brands fa-twitter"></i>
                  </div>
                </li>
                <li className="m-2">
                  <div>
                    <i class="fs-4 border border-1 border-white p-2 rounded-5  fa-brands fa-linkedin"></i>
                  </div>
                </li>
                <li className="m-2">
                  <div>
                    <i class="fs-4 border border-1 border-white p-2 rounded-5  fa-solid fa-globe"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 p-3 mt-5">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <p className="text-white text-center p-4 bottom-footer">
          Copyright © Your Website 2021
        </p>
      </div>
    </footer>
  );
}
