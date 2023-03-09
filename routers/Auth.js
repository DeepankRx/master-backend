const AuthController = require('../controllers/Auth');

const express = require('express');
const router = express.Router();

router.route('/login').post(AuthController.login);

router.route('/signup').post(AuthController.signup);

router.route('/').get(AuthController.getAllUsers);

module.exports = router;
