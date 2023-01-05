import React from "react";
// import auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import loadWebFont from "../../utils/webfont";

function Header() {
    
    loadWebFont(['Black Han Sans', 'Urbanist'])

    return(
        <header>
            <h1>My Cookbook</h1>
            <nav>
                <Link></Link>
            </nav>
        </header>
    )
}

export default Header;