const User = require("../models/userSchema")
const createError = require("http-errors")


const auth =async(req,res,next)=>{
    const token = req.header("x-auth")
    /* console.log(token) */

    try{
        const user = await User.findByToken(token)
        console.log(user)
        if(!user) throw createError(403)

        req.user=user;
        req.token=token;

        next()
    }
    catch(err){
        next(err)
    }
}




module.exports= auth ;