

const {model} = require("mongoose");

const {OrderSchema}=require("../Schemas/OrderSchema.js")

const OrderModel=  model("order" ,OrderSchema);

module.exports={OrderModel};