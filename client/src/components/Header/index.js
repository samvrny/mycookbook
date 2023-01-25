import React from "react";
import { Link } from 'react-router-dom';
import loadWebFont from "../../utils/webfont";

function Header() {

    loadWebFont(['Black Han Sans', 'Urbanist'])

    return(
        <header>
            <h1>My Cookbook</h1>
            <nav>
                <Link to='/login'>Login Page</Link>
            </nav>
        </header>
    )
}

export default Header;