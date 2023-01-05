import React from "react";
import loadWebFont from "../../utils/webfont";

function Home() {

    loadWebFont(['Urbanist'])

    return (
        <section className='Home flex column align-center'>
            <div className='welcome-head'>
                <h1>
                    Welcome to My Cookbook! You Made it!
                </h1>
            </div>
            <div className='welcome flex column align-center justify-center'>
                <p>
                    Welcome to My Cookbook! food fruit bread orange strawberry
                    pancake muffin bacon. You need somewhere to write down recipes,
                    so here you go! This is a place for you to do so. This application
                    is free to use and easy to navigate. I hope you enjoy!
                </p>
            </div>
            <div>
                <h2>Sign Up or Log In</h2>
                <p>Create a free account or sign in below:</p>
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
            <div>
                <h2>Search Recipes</h2>
                <p>
                    Not wanting to write your own recipes, or have the time?
                    Search for a recipe to use below from the food network, New York times,
                    and others. Search for a recipe below!
                </p>
                <label for='nyt'>Search New York Times:</label>
                <input id='nyt' type='text'></input>
                <br />
                <p>
                    Like the recipe you found? Create a free account here, and save the
                    link in your 'Links' section, and never lose great recipes you found again!
                    You can save links you did not find on the website there as well.
                </p>
            </div>
        </section>
    )
}

export default Home;