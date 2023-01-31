import React, { useState } from "react";

function Group() {

    //TODO:
    //decide if the users recipe groups will be going here, or in their dashboard. Starting with here, can update later if needed.

    // const [usersGroups, setUsersGroups] = useState([])

    let userGroups = fetch('/group', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                //a user alert will appear here. Perhaps a redirect will be what is needed?
                alert(response.statusText)
            }
    })

    console.log(userGroups.PromiseResult)

    return (
        <section>
            <div>
                Well hello there!
            </div>
        </section>
    )
}

export default Group;