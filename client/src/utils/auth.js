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
    fetch('/user/session' , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            console.log(response)
            console.log('Why is this doing something')
        return response.json()
        } else {
            console.log('No Session Available')
        }
    })
}

module.exports = auth;
