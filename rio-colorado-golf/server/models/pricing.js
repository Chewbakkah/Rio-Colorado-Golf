const { Schema, model } = require('mongoose'); 

const PricingSchema = new Schema(
    {
        service: {
            type: String, 
            required: true, 
            trim: true,
        }, 
        price: {
            type: String, 
            required: true, 
            trim: true, 
        }, 
        priceTimeFrame: {
            type: String, 
            enum: ['Weekday', 'Weekend/Holiday', 'None']
        },         
    }
); 

const Pricing = model('Pricing', PricingSchema); 

module.exports = Pricing; 