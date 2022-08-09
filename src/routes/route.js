const express = require('express');
const { result } = require('lodash');
const router = express.Router();
const lodash=require('lodash')


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

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const result=lodash.chunk(monthNames,3)
    console.log('my chunks group together',result)


    const oddNumber=[3,5,7,9,11,13,15,17,19,21]
    const result2=lodash.tail(oddNumber)
    console.log('my 9 odd numbers',result2)

    const myArr1=[1,2,3,4,5]
    const myArr2=[8,9,4,5,7]
    const myArr3=[5,2,3,4,7]
    const myArr4=[8,2,7,4,5]
    const result3=lodash.union(myArr1,myArr2,myArr3,myArr4)
    console.log(result3)

    const myobject=[["horror","The Shining"], ["drama","Titanic"],["thriller"],["Shutter Island"],["fantasy","Pans Labyrinth"]]
    const result4=lodash.fromPairs(myobject)
    console.log(result4)

    res.send('My second ever api!')


});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason