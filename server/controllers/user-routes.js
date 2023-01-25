const router = require('express').Router();
const session = require('express-session');
const { User } = require('../models');
const auth = require('../utils/auth');

router.get('/', (req, res) => {
    User.find({})
    .select('-__v -password')
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// router.get('/session', auth, (req, res) => {    
//     User.findOne({
//         session: req.session.user_id
//     })
//     .then(userData => {
//         res.json(userData)
//     })
// })

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    .then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json({ message: ' 🍌🍌🍌 This worked! Log in completed. 🍒🍒🍒', session: req.session })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .then(userData => {

        if(!userData) {
            res.status(400).json({ message: 'There is no user with this email address!' })
            return
        }

        const validPassword = userData.isCorrectPassword(req.body.password)

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password! Try again.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            // TODO: Could add a util later that just checks if the logged in is 'true' or 'false' to use on the fron end, and check for the session to be created and active.

            res.json({ message: '🍌🍌🍌 This worked! Log in completed. 🍒🍒🍒', session: req.session })
        });
        // res.json(userData)
    });
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
});

//TODO: Added for development purposes. Route can be deleted at a later time.
router.delete('/:id', (req, res) => {
    User.remove({
        _id: req.params.id
    })
    .then(userData => res.json(userData))
})

module.exports = router;