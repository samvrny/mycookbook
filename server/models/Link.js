const { Schema, model } = require('mongoose');

const LinkSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        link: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Link = model('Link', LinkSchema);

module.exports = Link;