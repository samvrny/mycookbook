const { Schema } = require('mongoose');

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
    }
);

module.exports = LinkSchema;