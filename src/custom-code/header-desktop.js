import React from 'react';
import {Link} from 'react-router-dom'

const HeaderDesktop = function() {
    return(
        <div className="d-none d-lg-flex flex-grow-1">
            <a className="navbar-brand text-white mx-3" href="#">Super Currency Converter</a>

            <div className="navbar-nav ml-auto align-items-center">
                <Link to="/" className="nav-item nav-link mx-1 text-white"> Home </Link>
                <Link to="/about" className="nav-item nav-link mx-1 text-white">About</Link>
                <Link to="/new-currency" className="nav-item nav-link mx-1 text-white">Ask a new Currency</Link>
            </div>
        </div>      
    )
}

export default HeaderDesktop;