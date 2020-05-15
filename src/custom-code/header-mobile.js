import React from 'react';

const HeaderMobile = function() {
    return(
        <div className="d-lg-none flex-grow-1">
            <a className="navbar-brand d-lg-flex text-white mx-3" href="#">Pedro Almeida</a>
            <a className="navbar-toggler navbar-brand float-right border text-white mx-5" role="button" data-toggle="collapse" href="#navbarMenu">III</a>
            <div className="collapse navbar-collapse bg-dark" id="navbarMenu">
                <a className="nav-item nav-link mx-1 text-white" href="#">Home</a>
                <a className="nav-item nav-link mx-1 text-white" href="#">About</a>
                <a className="nav-item nav-link mx-1 text-white" href="#">Ask a new Currency</a>
            </div>
        </div>
    )
}

export default HeaderMobile;