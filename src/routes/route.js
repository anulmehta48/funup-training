const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const underScore=require('underscore')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    // logger.welcome()

    const underScore=["",]
    res.send('My second ever api!')
});



router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
router.get('/movies', function (req, res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
})

router.get('/films', function (req, res){
    const movie=[{
        "id":1,
        "name1":"moive1"},{
        "id":2,
        "name2":"moive2"},{
        "id":3,
        "name3":"moive3"},{
        "id":4,
        "name4":"moive4"},{
        "id":5,
        "name5":"moive5"}]
    res.send(movie)
})

// router.get('/movies/:indexNumber', function(req, res){
//     let requestParams = req.params
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let indexNumber = requestParams.indexNumber
//     let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     movies=indexNumber
//     console.log('Name of the Movie is ', movies)

//     res.send(movies)
// })

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})


module.exports = router;