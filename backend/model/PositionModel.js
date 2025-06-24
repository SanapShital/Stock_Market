

const {model} = require("mongoose");

const {PositionSchema}=require("../Schemas/PositionSchema.js")

const PositionModel= new model("position" ,PositionSchema);

module.exports={PositionModel};