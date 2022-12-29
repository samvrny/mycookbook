const router = require('express').Router();
const { User, Link } = require('../models');
const auth = require('../utils/auth');

router.get('/', (req, res) => {
    Link.find({})
        .then(linkData => res.json(linkData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/newlink', auth, (req, res) => {
    Link.create({
        name: req.body.name,
        link: req.body.link
    })
        .then(({ _id }) => {
            return User.findByIdAndUpdate(
                { _id: req.session.user_id },
                { $push: { savedLinks: _id } },
                { new: true }
            )
        })
        .then(linkData => res.json(linkData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.put('/:id', (req, res) => {
    Link.findOneAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            link: req.body.link
        },
        { new: true, runValidators: true }
    )
        .then(linkData => {
            if (!linkData) {
                res.status(404).json({ message: 'No Link found with this id.' });
                return;
            }
            res.json(linkData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

router.delete('/:id', auth, (req, res) => {
    Link.findOneAndDelete({
        _id: req.params.id
    })
        .then(({ _id }) => {
            return User.findByIdAndUpdate(
                { _id: req.session.user_id },
                { $pull: { savedLinks: _id } },
                { new: true }

            )
        })
        .then(linkData => res.json(linkData))
        .catch(err => res.send(err))
})

module.exports = router;