const createError = require("http-errors")


const isAdmin=(req,res,next)=>{
    console.log("role..........",req.user)
    const {role} = req.user

    if(role!=="Admin") next(createError(403))

    next()
}


module.exports= isAdmin;