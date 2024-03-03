import mongoose from "mongoose"

const HospitalHours=new mongoose.Schema({
    
})

const doctorschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qulifications:{
        type:String,
        required:true
    },
    experience:{
        type:number,
        required:true,
        default:0
    },
    workesinhospitals:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Hospital'
    },

]
},{timestamps:true})


export const DoctorRecord=mongoose.model('DoctorRecord', doctorschema)