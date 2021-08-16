import React, { useState } from 'react';

const Navbar = () => {
    
    const [show, setShow] = useState(false)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent" id="nav">
                <div className="container">
                    <a className="navbar-brand" id="brand" href="#">WEBDEV STUDIO</a>
                    <button className="toggler-btn" type="button" onClick={()=>setShow(!show)} id="toggle-button">
                        {show?"X":<span className="toggler-icon" id="toggle-icon"></span>}
                    </button>
                </div>
            </nav>

            {
            show?<div className="nav-menu" id="popup">
            <div className="nav-menu-inner">
            <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Testimonial</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
            </div>
        </div>:null
            }
        </>
    );
};

export default Navbar;
