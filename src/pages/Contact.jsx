import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="contact">
        <h2>conatct section</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
        </div>
        <form className="contactForm container">
          <div className="form ">
            <input className='form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched' type="text" placeholder='UserName' />
            <input className='form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched' type="number" placeholder='UserAge' />
            <input className='form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched' type="email" placeholder='UserEmail' />
            <input className='form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched' type="password" placeholder='UserPassword' />
          </div>
          <button className="btn mt-4 text-white"> send Message </button>
        </form>
      </div>

    </>
  )
}
