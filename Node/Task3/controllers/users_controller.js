const asyncWrapper = require('../middleware/asyncWrapper');
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const appError = require('../utils/appError');
const generateJWT = require('../utils/generateJWT');

const getAllUsers = asyncWrapper(async (req, res, next) => {
    const query = req.query;

    const limit = parseInt(query.limit) || 5;
    const page = parseInt(query.page) || 1;
    const skip = (page - 1) * limit;
    const users = await User.find({}, { ___v: 0, password: 0 }).skip(skip).limit(limit);
    res.status(200).json({
        status: "success",
        data: { users }
    });
});

const register = asyncWrapper(async (req, res, next) => {
    const { name, email, password , role } = req.body;
    const oldUser = await User.findOne({ email });
    if (oldUser) {
        return res.status(400).json({
            status: "fail",
            message: "User already exists"
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role,
        profilePic: req.file.filename
    });

    const token = await generateJWT({
        email: newUser.email,
        id: newUser._id,
        role: newUser.role
    });
    newUser.token = token;
    await newUser.save();

    res.status(201).json({ status: "success", data: { user: newUser } });
});

const login = asyncWrapper(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        const error = appError.createError("Please provide email and password", 400, "fail");
        return next(error);
    }
    const user = await User.findOne({ email });
    if (!user) {
        const error = appError.createError("Invalid email or password", 401, "fail");
        return next(error);
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        const error = appError.createError("Invalid email or password", 401, "fail");
        return next(error);
    }
    const token = await generateJWT({
        email: user.email,
        id: user._id,
        role: user.role
    });
    user.token = token;
    await user.save();
    res.status(200).json({ status: "success", data: { user } });

});

module.exports = {
    getAllUsers,
    register,
    login
};