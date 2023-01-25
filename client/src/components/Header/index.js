import React from "react";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import loadWebFont from "../../utils/webfont";

function Header() {

    function logout(e) {
        console.log('Hello')
    }

    loadWebFont(['Black Han Sans', 'Urbanist'])

    return(
        <header>
            <h1>My Cookbook</h1>
            <nav>
                <Link to='/'>Homepage</Link>
                {Auth.loggedIn() ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <Link to='/login'>Login</Link>
                )}     
            </nav>
        </header>
    )
}

export default Header;