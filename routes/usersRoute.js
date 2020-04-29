const Route = require("express").Router()
const {getUsers,getUser, postUser, putUser,deleteUser, login}  = require("../controllers/usersController")

Route.get("/",getUsers)
Route.get("/:id", getUser)
Route.post("/",postUser)
Route.post("/login", login)
/* Route.route("/")
.get(getUsers)
.post(postUser) */

Route.put("/:id",putUser)

Route.delete("/:id",deleteUser )




module.exports= Route