import express from "express";
import Controls from "../controller/controller.js"

const dataRoute=express.Router();

const controller=new Controls


dataRoute.post('/',controller.create)
dataRoute.get('/:id',controller.index)
dataRoute.put('/',controller.update)
dataRoute.delete('/',controller.remove)

export default dataRoute;