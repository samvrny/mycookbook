const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        ingredients: {
            type: [String],
            trim: true
        },
        instructions: {
            type: [String],
            trim: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

const Recipe = model('Recipe', RecipeSchema);

module.exports = Recipe;