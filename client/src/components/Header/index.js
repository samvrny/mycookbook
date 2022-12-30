import React from "react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";

function Header() {
    return(
        <header>
            <h1>My Cookbook</h1>
            <nav>
                <ul>
                    {auth ? (
                        <ul>
                            Im Logged In!
                        </ul>
                    ) : (
                        <ul>
                            Im NOT Logged In!
                        </ul>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;