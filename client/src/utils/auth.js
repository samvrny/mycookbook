// const auth = (req, res, next) => {
//     // if (!req.session.user_id) {
//     //     //May need to change this redirect to be a 'window.location' change, or something of the sort. 
//     //     //   res.redirect('/login');
//     //     console.log('No session, brozinski!! 🍓🍓🍓')
//     // } else {
//     //     next();
//     // }
// };

const auth = () => {
    console.log('CLICK')
    // const response = fetch('/user/session', {
    //     method: 'GET'
    // })

    // if(response) {
    //     console.log(response, 'Hello')
    // } else {
    //     console.log('APPLE')
    // }
    fetch('/user/session' , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
        return response.json();
        } else {
            console.log('NO IT DOESN\'T WORK')
        }
    })
}

module.exports = auth;
