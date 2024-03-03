import mongoose from 'mongoose'

const patientschema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    diagonsedwith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    diagonsedwith:{
        type:String,
        enum:["M","F","O"]
        required:true
    },
    admittedin:{
        type.mongoose.Schema.ObjectId,
        ref:'Hospital'
    }
},{timestamp:true})

export const PatientRecord=mongoose.model('PatientRecord',patientschema)