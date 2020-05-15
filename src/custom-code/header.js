import React from 'react';

import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';

const Header = function() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg fixed-top bg-dark">
               <HeaderDesktop />
               <HeaderMobile />
            </nav>
        </div>
    )};

export default Header;