const router = require('express').Router();
const { User, Recipe } = require('../models');
const auth = require('../utils/auth');

router.get('/', (req, res) => {
    User.findOne({
        _id: req.session.user_id
    })
        .then(userData => {
            console.log(userData.savedRecipes, 'Hello World')
            res.json(userData.savedRecipes)
        })
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

//TODO: May need to update the put route later, to make sure it isn't just updating the overall database, 
//but the users recipes as well
router.put('/updaterecipe/:id', auth, (req, res) => {

    //ITS A .THEN AFTER FINDING THE USER!!!!!!!!!!!!!!
    User.findByIdAndUpdate({
        _id: req.session.user_id
    })
    .then(userData => {
        userData.savedRecipes.id(req.params.id).name = req.body.name
        userData.savedRecipes.id(req.params.id).ingredients = req.body.ingredients
        userData.savedRecipes.id(req.params.id).instructions = req.body.instructions
        res.json(userData.savedRecipes)
    })
    // Recipe.findOneAndUpdate(
    //     { _id: req.params.id },
    //     {
    //         name: req.body.name,
    //         ingredients: req.body.ingredients,
    //         instructions: req.body.instructions
    //     },
    //     { new: true, runValidators: true }
    // )
    //     .then(recipeData => {
    //         if (!recipeData) {
    //             res.status(404).json({ message: 'No recipe found with this id.' });
    //             return;
    //         }
    //         res.json(recipeData)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(400).json(err);
    //     })
})

// router.delete('/:id', auth, (req, res) => {
//     Recipe.findOneAndDelete({
//         _id: req.params.id
//     })
//         .then(({ _id }) => {
//             return User.findByIdAndUpdate(
//                 { _id: req.session.user_id },
//                 { $pull: { savedRecipes: _id } },
//                 { new: true }

//             )
//         })
//         .then(recipeData => res.json(recipeData))
//         .catch(err => res.send(err))
// })

module.exports = router;