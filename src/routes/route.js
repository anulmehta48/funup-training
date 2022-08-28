const express = require('express');
const router = express.Router();

const commonMW = require ("../middlewares/commonMiddlewares")
const createuserController=require('../controllers/createUserController')
const createProductController=require('../controllers/createProductController')
const createOrderController=require('../controllers/createOrderController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post('/createusernew',commonMW.mid1,createuserController.createusernew)
router.post('/createproduct',createProductController.createproduct)
router.post('/createorder',commonMW.mid1,createOrderController.createorder)
router.get(('/findBookedId',createOrderController.findBookedId))



module.exports = router;