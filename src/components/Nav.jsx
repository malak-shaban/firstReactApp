import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <div className="nav">
                <div className="logo"><NavLink to="" >Start Framework</NavLink></div>
                <ul className='nUl'>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </>
    )
}
