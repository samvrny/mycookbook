const auth = (req, res, next) => {
    if (!req.session.user_id) {
        //   res.redirect('/login');
        console.log('No session, brozinski!! 🍓🍓🍓')
        res.json('No Session Activated 🍓🍓🍓')
    } else {
        next();
    }
};

module.exports = auth;