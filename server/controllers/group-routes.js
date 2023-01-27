const router = require('express').Router();
const { User } = require('../models');
const auth = require('../utils/auth');

router.get('/', auth, (req, res) => {
    User.findOne({
        _id: req.session.user_id
    })
    .then(userData => res.json(userData.savedGroups))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;