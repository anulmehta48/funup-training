const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const userModel2=require("../models/userModel2")
const UserController= require("../controllers/userController")
const UserBookController=require("../controllers/userBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)



router.post("/createBookUser", UserBookController.createBookUser)

router.get("/getListofBookData",UserBookController.getListofBookData)

module.exports = router;