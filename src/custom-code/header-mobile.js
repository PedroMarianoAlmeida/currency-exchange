import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

const HeaderMobile = function() {
    return(
        <div className="d-lg-none w-100 row justify-content-between">
            <div className='col-4'>
                <a className="navbar-brand d-lg-flex text-white mx-3" href="#">Pedro Almeida</a>
            </div>
            <div className='col-1'>
                <NavDropdown id="navbarMenu">
                    <NavDropdown.Item> <Link to='/' className='text-dark'> Home </Link> </NavDropdown.Item>
                    <NavDropdown.Item > <Link to='/about' className='text-dark'> About </Link> </NavDropdown.Item>
                    <NavDropdown.Item> <Link to='/new-currency' className='text-dark'> Ask a new Currency </Link> </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    )
}

export default HeaderMobile;