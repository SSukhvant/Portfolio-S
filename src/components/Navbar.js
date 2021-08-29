import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    const [show, setShow] = useState(false)

    return (
        <>
        <div className="sticky-top">
            <nav className="navbar bg-w shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="#">{`</>WEBDEV STUDIO`}</a>
                    <button className="toggler-btn" type="button" onClick={()=>setShow(!show)} id="toggle-button">
                        {show?"X":<span className="toggler-icon" id="toggle-icon"></span>}
                    </button>
                </div>
            </nav>

            {
            show?<div className="nav-menu outer-shadow mt-4">
            <div className="nav-menu-inner">
            <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/Portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Testimonial</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Contact</NavLink>
                        </li>
                    </ul>
            </div>
        </div>:null
            }
            </div>
        </>
    );
};

export default Navbar;
