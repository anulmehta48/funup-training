// let printDate=function(){ 
//     let today=new Date();
//     let mydate=today.getDate()+"-"+(today.getMonth()+1)+"-"+(today.getFullYear()+1)
//     console.log(mydate())
// }

let printDate = function () {
    let today = new Date();
    let mydate = today.getDate()
    console.log("My current date is ", mydate)
}

let printMonth = function () {
    let today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let mymonth = monthNames[(today.getMonth())]
    console.log("My current month is ", mymonth)
}
const batchName="Plutonium"
const weekName="W3D5"
const toPic="Nodejs module system"
let getBatchInfo=function(){
    console.log(batchName+","+weekName +","+"The Topic for today is",toPic )
}



module.exports.batchName=batchName
module.exports.weekName=weekName
module.exports.toPic=toPic
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo=getBatchInfo

