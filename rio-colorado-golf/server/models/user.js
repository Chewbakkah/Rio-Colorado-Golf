const { Schema, model } = require('mongoose'); 
const bcrypt = require('bcrypt'); 

const UserSchema = new Schema(
    {
        firstName: {
            type: String, 
            required: true, 
            trim: true
        }, 
        lastName: {
            type: String, 
            required: true, 
            trim: true
        }, 
        email: {
            type: String, 
            required: true, 
            trim: true, 
            match: [/.+@.+\..+/, "Please enter a valid email address"]
        }, 
        password: {
            type: String, 
            required: true, 
            trim: true, 
            minlength: 8
        }, 
        role: {
            type: String, 
            required: true, 
            enum: ['user', 'member', 'admin'], 
            default: 'user'
        }, 
        membershipDate: {
            type: Date, 
        }
    }
); 

UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 15; 
        this.password = await bcrypt.hash(this.password, saltRounds); 
    }

    next(); 
}); 

UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password); 
}; 

const User = model('User', UserSchema); 

module.exports = User; 