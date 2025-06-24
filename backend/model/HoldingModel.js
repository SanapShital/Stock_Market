//HoldingModel.js file
const {model} = require("mongoose");

const {HoldingSchema}=require("../Schemas/HoldingSchema.js")

const HoldingModel= new model("holding" ,HoldingSchema);

module.exports={HoldingModel};