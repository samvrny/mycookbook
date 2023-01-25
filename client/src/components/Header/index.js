import React from "react";
import auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import loadWebFont from "../../utils/webfont";

function Header() {
    
    function testAuth() {
        auth();
    }

    loadWebFont(['Black Han Sans', 'Urbanist'])

    return(
        <header>
            <h1>My Cookbook</h1>
            <nav>
                <Link></Link>
            </nav>
            <button onClick={testAuth}>TEST AUTH</button>
        </header>
    )
}

export default Header;