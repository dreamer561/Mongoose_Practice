import mongoose from "mongoose"

const categoryschema=new mongoose.Schema({
    name:string,
    required:true,

}
,{timestamps:true})


export const category=mongoose.model("category" , categoryschema)
