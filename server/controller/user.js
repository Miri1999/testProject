const User = require("../models/user")



const createUser = async (req, res) => {
    try {
        console.log("register!!");
        console.log(req.body);
        const user = await new User({ ...req.body })
        console.log(user);

        await user.save()
        res.status(200).json({ user: user })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ err: err })
    }
}


const getAllUsers = async (req, res) => {
    try {
        console.log("getAllUsers!!");
        console.log(req.body);
        const users = await User.find()
        res.status(200).json({ allUsers: users })
    }
    catch (err) {
        res.status(400).json({ err: err })
    }
}



module.exports = { createUser, getAllUsers }