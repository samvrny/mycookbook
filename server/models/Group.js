const { Schema, model } = require('mongoose');

const GroupSchema = new Schema(
    {
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        savedRecipes: [RecipeSchema],
        savedLinks: [LinkSchema]
        //image to be added later
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

module.exports = GroupSchema;