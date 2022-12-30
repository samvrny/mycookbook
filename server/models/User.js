const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//import subdocuments for recipe
const RecipeSchema = require('./Recipe')

//user schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'You must enter a valid email address! Example: john@email.com']
        },
        password: {
            type: String,
            required: true,
            minLength: 8
        },
        savedRecipes: [RecipeSchema],
        savedLinks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Link'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

//hash the password for new users
UserSchema.pre('save', async function(next) {
    if(this.isNew) {
        this.password = await bcrypt.hash(this.password, 15);
    }

    next();
});

//compare an incoming password to it's hashed version for logins
UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password)
};

const User = model('User', UserSchema);

module.exports = User;