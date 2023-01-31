const router = require('express').Router();
const { User } = require('../models');
const auth = require('../utils/auth');

//TODO:
//add a route to grab all the data to print to a page; AKA the route will get all groups,
//and send back all of their data. With each dataset the data will be pumped into an object
//That can be used to create elements. 
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

router.post('/addgroup', auth, (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.session.user_id },
        { $push: { savedGroups: req.body } },
        { new: true }
    )
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//TODO: Add route that updates a groups names AND a route to delete a group

module.exports = router;