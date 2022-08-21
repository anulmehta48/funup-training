const express = require('express');
const router = express.Router();

const authorController= require('../controllers/authorController')
const publisherController=require('../controllers/publisherController')
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewAuthor", authorController.createNewAuthor  )
router.post("/createNewPublisher", publisherController.createNewPublisher  )
router.post("/createNewBook", bookController.createNewBook  )
router.get("/getBookandAuthorandPubLisherDetails",bookController.getBookandAuthorandPubLisherDetails)
router.put("/updateBooks",bookController.updateBooks)


module.exports = router;