import mongoose from "mongoose";


mongoose.connect("mongodb://admin:password@mongodb:27017/user-account?authSource=admin")
.then(()=>{
    console.log("connection established to database")
})
