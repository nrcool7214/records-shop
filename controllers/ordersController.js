const createError= require("http-errors")
const Order= require("../models/orderSchema")


exports.getOrders= async(req,res,next)=>{
    try{
        const orders= await Order.find().populate("record","-__v -year -img -price") 
         res.json({success:true, orders: orders})
    }
    catch(err){
        next(err)
    }
   
}

exports.getOrder=async(req,res,next)=>{
   const {id} = req.params 

   try{
       const order = await Order.findById(id).populate("record","-__v -year -img -price") 
        if(!order) throw createError(404)
         res.json({success:true, order:order})
   }
   catch(err){
       next(err)
   }
    
   
}

exports.postOrder=async(req,res,next)=>{
    
    try{
        const order = new Order(req.body)
        await order.save()
        res.json({success:true,order:order })
    }
    catch(err){
        next(err)
    }

    
    
}

exports.putOrder=async(req,res,next)=>{
    const {id} = req.params
    const order = req.body
    
    try{
        const updatedOrder= await Order.findByIdAndUpdate(id, order, {new:true})
        if(!updatedOrder) throw createError(404)
        res.json({success:true, order:updatedOrder})
    }
    catch(err){
        next(err)
    }

    

}
exports.deleteOrder=async(req,res,next)=>{

    const {id} =req.params

    try{
        const order= await Order.findByIdAndDelete(id)
        if(!order) throw createError(404)
         res.json({success:true,order:order})
    }
    catch(err){
        next(err)
    }

   
}