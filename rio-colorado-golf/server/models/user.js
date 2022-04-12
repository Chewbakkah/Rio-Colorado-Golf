const { Schema, model } = require('mongoose'); 

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
            trim: true
        }, 
        password: {
            type: String, 
            required: true, 
            trim: true
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

const User = model('User', UserSchema); 

module.exports = User; 