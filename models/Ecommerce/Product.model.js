import mongoose from "mongoose"

const productschema=new mongoose.Schema({
    description:{
        required:true,
        type:String,

    },
    name:{
        required:true,
        type:String,

    },
    productimage:{
        type:string,

    },
    price:{
    
        type:Number,
        default:o
    },

    stock:{
    
        type:Number,
        default:0
    },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,

    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        req:"user"
    }

},{timestamps:true})

export const Product=mongoose.model("Product",productschema)
