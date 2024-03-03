import mongoose from 'mongoose'

const orderitemschema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.objectId,
        ref: "product"
    },
    quantity: {
        type: number,
        required: true

    }
}
)

const orderschema = new mongoose.Schema({

    orderprice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"

    },
    orderItems: {
        type: [orderitemschema]
    },
    adress: {
        type: Schema,
        required: true
    },
    status:{
        type:String,
        enum:["pending","cancelled","delivered"],
        default:"pending"
    }
}, { timestamp: true })


export const order = mongoose.model("order", orderschema)