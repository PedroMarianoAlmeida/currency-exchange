import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'

const HeaderMobile = function() {
    return(
        <div className="d-lg-none w-100 row justify-content-between">
            <div className='col-4'>
                <a className="navbar-brand d-lg-flex text-white mx-3" href="#">Pedro Almeida</a>
            </div>
            <div className='col-1'>
                <NavDropdown id="navbarMenu">
                    <NavDropdown.Item>Home</NavDropdown.Item>
                    <NavDropdown.Item >About</NavDropdown.Item>
                    <NavDropdown.Item>Ask a new Currency</NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    )
}

export default HeaderMobile;