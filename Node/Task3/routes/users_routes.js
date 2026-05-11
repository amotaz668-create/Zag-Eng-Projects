const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const usersController = require('../controllers/users_controller');
const multer = require('multer');
const appError = require('../utils/appError');
const allowedTo = require('../middleware/allowedTo');


const diskStorage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        return cb(appError('Only image files are allowed', 400), false);
    }
}

const upload = multer({ storage: diskStorage, fileFilter: fileFilter });

const router = express.Router();


router.route('/').get(verifyToken, allowedTo('admin') ,usersController.getAllUsers);

router.route("/register")
    .post(upload.single("profilePic"), usersController.register);


router.route("/login").post(usersController.login);

module.exports = router;