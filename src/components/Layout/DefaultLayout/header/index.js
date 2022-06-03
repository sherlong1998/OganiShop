import React, { Fragment } from 'react';
import HeaderTop from './Header_top/HeaderTop';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderBot from './HeaderBot/HeaderBot';
function Header() {
    return (
        <Fragment>
            <HeaderTop />
            <HeaderMenu />
            <HeaderBot />
        </Fragment>
    );
}

export default Header;
