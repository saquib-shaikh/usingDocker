import express from "express";
import dataRoute from "./RouteHandler/route.js";


const app=express();
const port=4000;

app.use(express.json())

app.use("/product",dataRoute)

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
