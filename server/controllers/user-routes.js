const router = require('express').Router();
const { User } = require('../models');

router.get('/', (req, res) => {
    User.find({})
    .select('-__v -password')
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

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
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
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

            res.json({ user: userData, message: ' 🍌🍌🍌 This worked! Log in completed. 🍒🍒🍒', session: req.session })
        });
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

module.exports = router;