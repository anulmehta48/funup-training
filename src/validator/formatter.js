const mytext="           FunctionUp               "
let trim=function(){
    console.log(mytext.trim())
}

module.exports.trim=trim
module.exports.mytext=mytext

const mywords="MY NAME IS ANUL MEHTA"
let toLowerCase=function(){
    console.log(mywords.toLowerCase())
}
const mywords2="my name is anul mehta"
let toUpperCase=function(){
    console.log(mywords2.toUpperCase())
}

module.exports.toLowerCase=toLowerCase 
module.exports.toUpperCase=toUpperCase 
