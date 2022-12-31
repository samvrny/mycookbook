const router = require('express').Router();
const { User } = require('../models');
const auth = require('../utils/auth');

router.get('/', (req, res) => {
    User.findOne({
        _id: req.session.user_id
    })
        .then(userData => res.json(userData.savedRecipes))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/newrecipe', auth, (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.session.user_id },
        { $push: { savedRecipes: req.body } },
        { new: true }
    )
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.put('/updaterecipe/:id', auth, (req, res) => {
    User.findById({ _id: req.session.user_id }, function (err, user) {
        let apple = user.savedRecipes.indexOf(req.params.id, 0)
        console.log(apple)
        console.log(user.savedRecipes.id(req.params.id).name, 'APPLE')
        console.log(user.savedRecipes[2].name)

        user.savedRecipes[2].name = req.body.name

        user.save(function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log(user, 'APPLE')
            }
        })
    })
    //TODO: REALLY NEED TO FIGURE OUT this mother FUCKing PUT request holy good lord in heaven WWW.WHATTHEFUCK.COMMMMM
})

router.delete('/deleterecipe/:id', auth, (req, res) => {
    User.findByIdAndUpdate( //changed from findOneAndUpdate
        { _id: req.session.user_id },
        { $pull: { savedRecipes: { _id: req.params.id } } },
        { new: true }
    )
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router;