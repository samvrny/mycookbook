const router = require('express').Router();
const { User } = require('../models');
const auth = require('../utils/auth');

router.get('/', auth, (req, res) => {
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
});

router.put('/updaterecipe/:id', auth, async (req, res) => {
    await User.findById(
        { _id: req.session.user_id }
    )
        .then(userData => {
            userData.savedRecipes.id(req.params.id).name = req.body.name;
            userData.savedRecipes.id(req.params.id).ingredients = req.body.ingredients;
            userData.savedRecipes.id(req.params.id).instructions = req.body.instructions;
            userData.save();

            res.json(userData.savedRecipes);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/deleterecipe/:id', auth, (req, res) => {
    User.findByIdAndUpdate( //changed from findOneAndUpdate
        { _id: req.session.user_id },
        { $pull: { savedRecipes: { _id: req.params.id } } },
        { new: true }
    )
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;