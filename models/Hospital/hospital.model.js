import mongoose from 'mongoose'

const hospitalschema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    address: {
        type: String,
        required: true

    },
    city: {
        type: String,
        required: true

    },
    pin: {
        type: String,
        required: true

    },
    specilization: [
        {
            type:String
        }
    ]
},


    { timestamps: true })


export const Hospital = mongoose.model('Hospital', hospitalschema)