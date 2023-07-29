const mongoose = require('mongoose')

const trackerSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: [true, 'must have a type'],
            enum: {
                values: ['income', 'expense'],
                message: 'either income or expense only'
            }
        },
        name: {
            type: String,
            required: [true, 'income/expense must have a name']
        },
        amount: {
            type: Number,
            required: [true, 'income/expense must have an amount']
        }
    }
)

const Tracker = mongoose.model('Tracker', trackerSchema)

module.exports = Tracker;