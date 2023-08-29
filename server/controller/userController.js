const User = require('../model/User');
const jwt = require('jsonwebtoken');

async function signup(req, res){
    try {
        const {fullName, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(403).json({
                message: "user already registered"
            });
        }
        const newUser = {
            fullName, email, password
        }
        await User.create(newUser);
        res.status(201).json({
            message: "user registered",
            status: "success"
        });
    } catch (error) {
        res.status(500).json({
            message: "user registeration failed",
            status: "failure"
        });
    }
}

async function login(req, res){
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email : email});
        if(!user){
            return res.status(404).json({
                message: "user not found"
            });
        } else {
            if(password === user.password){
                res.status(200).json({
                message: "you are logged in",
                status: "success"
                });
            }
        }
        
    } catch (error) {
        res.status(500).json({
            message: "user registeration failed",
            status: "failure"
        });
    }
}

module.exports = {
    signup, login
}