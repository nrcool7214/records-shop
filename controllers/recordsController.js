const createError= require("http-errors")
const Record = require("../models/recordSchema")


exports.getRecords= async(req,res,next)=>{
    try{
        const records = await Record.find()
        res.json({success:true, records: records})
    }
    catch(err){
        next(err)
    }
    
}

exports.getRecord=async(req,res,next)=>{
   const {id} = req.params 
   try{
       const record= await Record.findById(id)
       if(!record) throw createError(404)
       res.json({success:true, record:record})
   }
   catch(err){
       next(err)
   }
    
}

exports.postRecord=async(req,res,next)=>{
    
    try{
        const record = new Record(req.body)
        await record.save()
        res.json({success:true,record:record }) 
    }
    catch(err){
        next(err)
    }
   

    
   
}

exports.putRecord=async(req,res,next)=>{
    const {id} = req.params
    const record= req.body
    
    try{
        const updatedRecord = await Record.findByIdAndUpdate(id,record, {new:true})
        if(!updatedRecord) throw createError(404)
        res.json({success:true, record:updatedRecord})
    }
    catch(err){
        next(err)
    }



}
exports.deleteRecord=async(req,res,next)=>{
    const {id} =req.params
    try{
        const record = await Record.findByIdAndDelete(id)
        if(!record) throw createError(404)
        res.json({success:true,record:record})
    }
    catch(err){
        next(err)
    }

    
}