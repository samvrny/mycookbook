import React from "react";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import loadWebFont from "../../utils/webfont";

function Header() {

    async function logout(e) {
        console.log('Hello')

        await fetch('/user/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            if(response.ok) {
                console.log('logged out')
            } else {
                console.log(response.statusText)
            }
        })
        Auth.logout()
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