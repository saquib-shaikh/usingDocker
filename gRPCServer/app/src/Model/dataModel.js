import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    category:{
        type: String
    },
    creationTime:{
        type:Date,
        default:Date.now
    }
})

const ShirtProduct=new mongoose.model("Shirts", productSchema);

export default ShirtProduct;