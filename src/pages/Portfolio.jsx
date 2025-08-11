import React, { useState } from 'react'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const openImage = (img) => {
    setSelectedImg(img);
  };

  const closeImage = () => {
    setSelectedImg(null);
  };
  return (
    <>
      <div className="portfolio">
        <h2>portfolio component</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
        </div>
        <div className="photos">
          <div className="rounded-3 overflow-hidden position-relative">
            <img src={img1} alt="" />
            <div onClick={() => openImage(img1)} className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>
          <div className="rounded-3 overflow-hidden position-relative">
            <img src={img2} alt="" />
            <div onClick={() => openImage(img2)} className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>

          </div>
          <div className="rounded-3 overflow-hidden position-relative"><img src={img3} alt="" />
            <div onClick={() => openImage(img3)} className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>
          <div className="rounded-3 overflow-hidden position-relative">
            <img src={img1} alt="" />
            <div onClick={() => openImage(img1)} className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>
          <div className="rounded-3 overflow-hidden position-relative">
            <img src={img2} alt="" />
            <div onClick={() => openImage(img2)} className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>

          </div>
          <div className="rounded-3 overflow-hidden position-relative"><img src={img3} alt="" />
            <div onClick={() => openImage(img3)} className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>


        </div>
        {/* ----------------- */}
        {selectedImg && (
          <div className="fullscreen-overlay" onClick={closeImage}>
            <img src={selectedImg} alt="fullscreen" />
          </div>
        )}
      </div>
    </>
  )
}
