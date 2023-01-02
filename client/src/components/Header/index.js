import React from "react";
import auth from "../../utils/auth";

function Header() {

    return(
        <header>
            <h1>My Cookbook</h1>
            <button onClick={auth}>AUTH CHECK</button>
            <nav>
                <ul>
                    {/* {auth() ? (
                        <ul>
                            Im Logged In!
                        </ul>
                    ) : (
                        <ul>
                            Im NOT Logged In!
                        </ul>
                    )} */}
                </ul>
            </nav>
        </header>
    )
}

export default Header;