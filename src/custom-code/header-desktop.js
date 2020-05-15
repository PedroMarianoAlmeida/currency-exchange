import React from 'react';

const HeaderDesktop = function() {
    return(
        <div className="d-none d-lg-flex flex-grow-1">
            <a className="navbar-brand text-white mx-3" href="#">Super Currency Converter</a>

            <div className="navbar-nav ml-auto align-items-center">
                <a className="nav-item nav-link mx-1 text-white" href="#">Home</a>
                <a className="nav-item nav-link mx-1 text-white" href="#">About</a>
                <a className="nav-item nav-link mx-1 text-white" href="#">Ask a new Currency</a>
            </div>
        </div>      
    )
}

export default HeaderDesktop;