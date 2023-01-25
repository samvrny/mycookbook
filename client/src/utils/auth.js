const checkAuth = async () => {
    let apple = await fetch('/user')
    .then(response => {
        if(response.ok) {
            // console.log(response.json())
            return response.json();
        } else {
            console.log('Not Logged In');
        }
    })

    console.log(apple[0].savedRecipes)
    return apple;
}

// module.exports = checkAuth;
