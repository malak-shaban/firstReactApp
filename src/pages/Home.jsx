import React from 'react'
import myimg from '../assets/avataaars.svg'

export default function Home() {
    return (
        <>
            <div className="home">
                <img src={myimg} alt="" />
                <h1>Start Framework</h1>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3" style={{ backgroundColor: "white" }}></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line ms-3" style={{ backgroundColor: "white" }}></div>
                </div>
                <div className="line">
                    <div className="l1"></div>
                    <div className="star"></div>
                    <div className="l2"></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>

        </>
    )
}
