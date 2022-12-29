const router = require('express').Router();
const { User, Recipe } = require('../models');
const auth = require('../utils/auth');

router.get('/', (req, res) => {
    Recipe.find({})
        .then(recipeData => res.json(recipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/newrecipe', auth, (req, res) => {
    Recipe.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })
        .then(({ _id }) => {
            return User.findByIdAndUpdate(
                { _id: req.session.user_id },
                { $push: { savedRecipes: _id } },
                { new: true }
            )
        })
        .then(recipeData => res.json(recipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.delete('/:id', auth, (req, res) => {
    Recipe.findOne({
        _id: req.params.id
    })
        .then(({ _id }) => {
            return User.findByIdAndUpdate(
                { _id: req.session.user_id },
                { $pull: { savedRecipes: _id } },
                { new: true }

            )
        })
        .then(recipeData => res.json(recipeData))
        .catch(err => res.send(err))
})

module.exports = router;