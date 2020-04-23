const mongoose = require("mongoose")
const User = require("../models/userSchema")
const faker = require("faker")

const main=async()=>{
      mongoose.connect("mongodb://127.0.0.1:27017/record-shop-live",{ useNewUrlParser: true ,useUnifiedTopology: true })

    mongoose.connection.on("error",(err)=>console.log(err))
    mongoose.connection.on("open", ()=>console.log("database connected"))

    try{
        await User.deleteMany({})
        console.log("refresh/deleting users collection")
    }
    catch(err){
        console.log(err)
    }


    const userPromises= Array(10).fill(null).map(()=>{
            const user = new User({
                firstName:faker.name.firstName(),
                lastName:faker.name.lastName(),
                email:faker.internet.email(),
                password:faker.internet.password()
            })

            return user.save()

    })

    try{
        await Promise.all(userPromises);
        console.log("users Added into the database")
    }
    catch(err){
        console.log(err)
    }




}


main();

