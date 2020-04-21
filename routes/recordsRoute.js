const Route = require("express").Router()
const {getRecords, postRecord, putRecord,deleteRecord}  = require("../controllers/recordsController")

Route.get("/",getRecords)
Route.post("/",postRecord)

/* Route.route("/")
.get(getRecords)
.post(postRecord) */

Route.put("/:id",putRecord)

Route.delete("/:id",deleteRecord )



module.exports= Route