import React from "react";

import { slide as Menu} from 'react-burger-menu';
import './SideNav.css';
// in app <SideNav pageWrapId={"page-wrap"} outercontainerId={"App"}/>
//<div id="page-wrap">

function SideNav(props) {
    return (
        <Menu {...props}>
        <a className="menu-item" href="/">
            Home
        </a>

        <a className="menu-item" href="/about">
            About
        </a>

        <a className="menu-item" href="/diy">
            DIY
        </a>

        <a className="menu-item" href="/react">
            React
        </a>
        
        <a className="menu-item" href="/contact">
            Contact us
        </a>
        </Menu>
    );
    }

export default SideNav;