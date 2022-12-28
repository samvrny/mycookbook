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
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;