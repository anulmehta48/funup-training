const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ data: savedData });
  } catch (err) {
    res.status(500).send({ msg: "server error", error: err })
  }

}

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user) {
      return res.status(401).send({ status: false, msg: "username or the password is not corerct", });
    }

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium"
    );
    res.status(200).setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });

  } catch (err) {
    res.status(500).send({ msg: "server error", error: err })
  }

};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      return res.status(404).send({ status: false, msg: "No such user exists" });
    }
    res.status(200).status(200).send({ status: true, data: userDetails });

  } catch (err) {
    res.status(500).send({ msg: "server error", error: err })
  }

};




const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser });

  } catch (err) {
    res.status(500).send({ msg: "server error", error: err })
  }

};

const postMessage = async function (req, res) {
  try {
    let message = req.body.message
    let token = req.headers["x-auth-token"]
    if (!token) return res.status(404).send({ status: false, msg: "token must be present in the request header" })
    let decodedToken = jwt.verify(token, 'functionup-plutonium')
    if (!decodedToken) return res.status(401).send({ status: false, msg: "token is not valid" })
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    let user = await userModel.findById(req.params.userId)
    if (!user) return res.status(404).send({ status: false, msg: 'No such user exists' })

    let updatedPosts = user.posts
    updatedPosts.push(message)
    if(!message){
      return res.status(204).send({status:false, msg:"no conent in your post"})
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
    return res.status(200).send({ status: true, data: updatedUser })

  } catch (err) {
    res.status(500).send({ msg: "server error", error: err })

  }
}

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if (!user) {
      return res.status(404).send({ status: false, msg: "No Such User Exists" })
    }
    let updatedUser = await userModel.findByIdAndUpdate({ _id: userId }, { isdeleted: true }, { new: true })
    res.status(200).send({ status: true, data: updatedUser })


  } catch (err) {
    res.status(500).send({ msg: "server error", error: err })

  }
}


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.postMessage = postMessage
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
