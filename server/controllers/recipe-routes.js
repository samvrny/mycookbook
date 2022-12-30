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
    User.findById(
        { _id: req.session.user_id },
    )
    .then(userData => {
        const user = userData
        console.log(user)
        user.save()
    })
        // .then(userData => {
        //         userData.savedRecipes.id(req.params.id).name = req.body.name
        //         userData.savedRecipes.id(req.params.id).ingredients = req.body.ingredients
        //         userData.savedRecipes.id(req.params.id).instructions = req.body.instructions
        //     res.json(userData.savedRecipes)
        // })
})

router.delete('/deleterecipe/:id', auth, (req, res) => {
    User.findOneAndUpdate(
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