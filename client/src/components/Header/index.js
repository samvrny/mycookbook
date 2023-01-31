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
                if (response.ok) {
                    console.log('logged out')
                } else {
                    console.log(response.statusText)
                }
            })
        Auth.logout()
    }

    loadWebFont(['Black Han Sans', 'Urbanist'])

    return (
        <header>
            <h1>My Cookbook</h1>
            <nav>
                {Auth.loggedIn() ? (
                    <div>
                        <Link to='/'>Homepage</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <Link to='/'>Homepage</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;