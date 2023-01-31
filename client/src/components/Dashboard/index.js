import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {

    return (
        <section>
            <h2>Hello, User</h2>
            <div>
                <h3>My Recipes</h3>
                <p>Go to your saved recipes:</p>
                <Link to='/group'>Click For Groups</Link>
            </div>
            <div>
                <h3>Create Recipe</h3>
                <p>Create a new recipe here:</p>
                <Link to='addrecipe'></Link>
            </div>
            <div>
                <h3>Save Link</h3>
                <p>
                    Save the link to a recipe you found on the web here:
                </p>
                <Link to='savelink'></Link>
            </div>
        </section>
    )
}

export default Dashboard;