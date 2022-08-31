const jwt = require('jsonwebtoken')

const authenticate = function (req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"];
    if (!token) {
        return res.send({ status: false, msg: "token must be present" });
    }
    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-plutonium")
    if (!decodedToken) {
        return res.send({ status: false, msg: "token is invalid" });
    }
    req.loggedInUser = decodedToken.userId
    next()

}

const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let requestUserId=req.params.userId
    if(requestUserId !==req.loggedInUser){
        return res.send({status:false,msg:"Permission Denied for this User"})
    }
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise