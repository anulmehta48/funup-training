const express = require('express');
const router = express.Router();
const abc = require('../introduction/intro')
const xyz = require('../logger/logger')
const date=require('../util/helper')
const month=require('../util/helper')
const topic=require('../util/helper')
const mytext=require('../validator/formatter')
const lower=require('../validator/formatter')
const upper=require('../validator/formatter')

// router.get('/test-me', function (req, res) {
//     console.log('welcome to my appliction i am', xyz.myname)
//     xyz.welCome()
//     res.send('My second ever api!')
// });

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    console.log('welcome to my appliction i am', xyz.myname)
    xyz.welCome()
    date.printDate()
    month.printMonth()
    topic.getBatchInfo()
    mytext.trim()
    lower.toLowerCase()
    upper.toUpperCase()

    res.send('My second ever api!')
  

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason