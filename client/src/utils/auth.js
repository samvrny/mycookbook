// const auth = (req, res, next) => {
//     // if (!req.session.user_id) {
//     //     //May need to change this redirect to be a 'window.location' change, or something of the sort. 
//     //     //   res.redirect('/login');
//     //     console.log('No session, brozinski!! 🍓🍓🍓')
//     // } else {
//     //     next();
//     // }
// };

const checkAuth = () => {
    fetch('/user/session')
    .then(response => {
        if(response.ok) {
            console.log(response.json())
        } else {
            console.log('Not Logged In');
        }
    })
    // fetch('/recipe')
    //     .then(response => {
    //         if (response.ok) {
    //             console.log(response.json())
    //         } else {
    //             console.log('NOT QUITE WORKING')
    //         }
    //     })
}

const auth = () => {
    checkAuth();

    if (!checkAuth) {
        console.log('NO AUTH')
    } else {
        console.log('YES AUTH')
    }
}

module.exports = auth;
