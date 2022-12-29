const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        ingredient: {
            type: [String],
            trim: true
        },
        instructions: {
            type: [String],
            trim: true
        }
    }
)

module.exports = RecipeSchema;