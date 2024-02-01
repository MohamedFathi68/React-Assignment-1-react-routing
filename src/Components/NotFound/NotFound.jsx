import React from 'react'
import img from '../../Assets/Images/err404_notfound.jpeg'

export default function NotFound() {
  return (
    <div className="w-50 m-auto ">
      <section className="min-vh-100 pt-5 d-flex justify-content-center align-items-center flex-column ">
        <img src={img} alt="Error 404 this page not found" />
        <h2>This Page Not Found</h2>
      </section>
    </div>
  )
}
