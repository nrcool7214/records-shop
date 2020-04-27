const mongoose = require("mongoose")
const {Schema} = mongoose;

const OrderSchema= new Schema({
    quantity: {type:Number, required:true},

    record:{type:String, required:true},

    createAt:{type:Date, default:Date.now}
})


module.exports=mongoose.model("Order",OrderSchema)