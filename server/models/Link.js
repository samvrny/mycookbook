const { Schema, model } = require('mongoose');

const LinkSchema = new Schema(
    {
        name: {
            type: String,
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

module.exports = LinkSchema;