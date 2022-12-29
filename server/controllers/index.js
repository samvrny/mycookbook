const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
const linkRoutes = require('./link-routes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/link', linkRoutes);

//WHAT is this below? don't know have to look up
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;