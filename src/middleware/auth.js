const jwt = require('jsonwebtoken')

const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"];
        if (!token) {
            return res.status(404).send({ status: false, msg: "token must be present" });
        }
        console.log(token);
        let decodedToken = jwt.verify(token, "functionup-plutonium")
        if (!decodedToken) {
            return res.status(400).send({ status: false, msg: "token is invalid" });
        }
        req.loggedInUser = decodedToken.userId
        next()

    } catch (err) {
        res.status(500).send({ msg: "server error", error: err })
    }


}

const authorise = function (req, res, next) {
    try {
        let requestUserId = req.params.userId
        if (requestUserId !== req.loggedInUser) {
            return res.status(403).send({ status: false, msg: "Permission Denied for this User" })
        }
        next()

    } catch (err) {
        res.status(500).send({ msg: "server error", error: err })

    }

}

module.exports.authenticate = authenticate
module.exports.authorise = authorise