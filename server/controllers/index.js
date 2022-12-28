const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/user', userRoutes);

//WHAT is this below? don't know have to look up
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;