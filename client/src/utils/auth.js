const auth = (req, res, next) => {
    if (!req.session.user_id) {
        //May need to change this redirect to be a 'window.location' change, or something of the sort. 
        //   res.redirect('/login');
        console.log('No session, brozinski!! 🍓🍓🍓')
    } else {
        next();
    }
};

module.exports = auth;
