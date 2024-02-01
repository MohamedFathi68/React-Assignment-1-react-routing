import React from "react";
import './Portfolio.css'
import pic1 from '../../Assets/Images/poert1.png'
import pic2 from '../../Assets/Images/port2.png'
import pic3 from '../../Assets/Images/port3.png'


export default function Portfolio() {
  return (
    <section className="min-vh-100 pt-5 d-flex justify-content-center align-items-center flex-column text-center ">
      <div className="container mt-5 ">
          <h1 className="fw-bolder my-4">PORTFOLIO COMPONENT</h1>
          <div className="d-flex justify-content-center align-items-center mb-4 ">
            <div className="line mx-2 "></div>
            <i className="fa-solid fa-star mx-2 "></i>
            <div className="line mx-2 "></div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <div><img src={pic1} alt="Weak Connection" className="w-100 p-3 rounded rounded-5 " /></div>
            </div>
            <div className="col-md-4 ">
              <div><img src={pic2} alt="Weak Connection" className="w-100 p-3 rounded rounded-5 " /></div>
            </div>
            <div className="col-md-4 ">
              <div><img src={pic3} alt="Weak Connection" className="w-100 p-3 rounded rounded-5 " /></div>
            </div>
            <div className="col-md-4 ">
              <div><img src={pic1} alt="Weak Connection" className="w-100 p-3 rounded rounded-5 " /></div>
            </div>
            <div className="col-md-4 ">
              <div><img src={pic2} alt="Weak Connection" className="w-100 p-3 rounded rounded-5 " /></div>
            </div>
            <div className="col-md-4 ">
              <div><img src={pic3} alt="Weak Connection" className="w-100 p-3 rounded rounded-5 " /></div>
            </div>
          </div>
        </div>
    </section>
  );
}
