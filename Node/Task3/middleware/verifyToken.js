const jwt = require("jsonwebtoken");
const appError = require("../utils/appError");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        const error = appError.createError("you are not logged in", 401);
        return next(error);
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            const error = appError.createError("Invalid token", 401);
            return next(error);
        }
        req.user = decoded;
        next();
    });
};