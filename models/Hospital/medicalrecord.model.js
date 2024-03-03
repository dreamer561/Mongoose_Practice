import mongoose from 'mongoose'

const medicalrecordschema=new mongoose.Schema({},{timestamps:true})

export const MedicalRecord=mongoose.model('MedicalRecord',medicalrecordschema)