const router = require('express').Router();
const { User } = require('../models');
const auth = require('../utils/auth');

//TODO: 
//must change to be a query that grabs the recipes withing a group 
router.get('/', auth, (req, res) => {
    User.findOne({
        _id: req.session.user_id
    })
        .then(userData => res.json(userData.savedGroups))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/addrecipe', auth, (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.session.user_id }
    )
        .then(userData => {
            userData.savedGroups.id(req.body.groupId).savedRecipes.push(req.body.recipe);
            userData.save();

            res.json(userData.savedGroups.id(req.body.groupId))
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.put('/updategroup', auth, (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.session.user_id }
    )
        .then(userData => {
            userData.savedGroups.id(req.body.oldId).savedRecipes.pull(req.body.recipeId);
            userData.savedGroups.id(req.body.newId).savedRecipes.push(req.body.recipe);
            userData.save();

            res.json(userData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//TODO:
//change the recipe ID to be coming from the requests body rather than the parameters.
router.put('/updaterecipe', auth, async (req, res) => {
    await User.findById(
        { _id: req.session.user_id }
    )
        .then(userData => {
            userData.savedGroups.id(req.body.groupId).savedRecipes.id(req.body.recipeId).name = req.body.recipe.name;
            userData.savedGroups.id(req.body.groupId).savedRecipes.id(req.body.recipeId).ingredients = req.body.recipe.ingredients;
            userData.savedGroups.id(req.body.groupId).savedRecipes.id(req.body.recipeId).instructions = req.body.recipe.instructions;
            userData.save();

            res.json(userData.savedGroups);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//TODO:
//Delete a recipe AFTER finding it's group id. 
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