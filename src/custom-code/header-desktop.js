import React from 'react';

const HeaderDesktop = function() {
    return(
        <div class="d-none d-lg-flex flex-grow-1">
            <a class="navbar-brand text-white mx-3" href="#">Super Currency Converter</a>

            <div class="navbar-nav ml-auto align-items-center">
                <a class="nav-item nav-link mx-1 text-white" href="#">Home</a>
                <a class="nav-item nav-link mx-1 text-white" href="#">About</a>
                <a class="nav-item nav-link mx-1 text-white" href="#">Ask a new Currency</a>
            </div>
        </div>      
    )
}

export default HeaderDesktop;