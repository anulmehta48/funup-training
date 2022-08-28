
const mid1= function ( req, res, next) {
    let headerValue=req.headers["isfreeappuser"]
    req.body.isFreeAppUser=headerValue
    if(!headerValue){
        res.send("isFreeAppUser value is mandatory")
    }
    next()
}

module.exports.mid1= mid1
