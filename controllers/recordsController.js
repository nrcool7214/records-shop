
exports.getRecords= (req,res,next)=>{
    res.send("get request received on /records")
}
exports.postRecord=(req,res,next)=>{
    console.log(req.body)
    res.send("received post request on /records")
}
exports.putRecord=(req,res,next)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.send("received put request on /records/:id")

}
exports.deleteRecord=(req,res,next)=>{
    console.log(req.params.id)
    if(req.params.id!=="1"){
       next(createError(500))
    }
    res.send("received delete request on records/:id")
}