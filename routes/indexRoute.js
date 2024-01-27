const express = require('express');
const router = express.Router();

//Routes
const authRoute = require('./auth/authRoute.js');
const menuRoute = require('./menu/menuRoute.js');

router.use('/auth', authRoute);
router.use('/menu', menuRoute);

module.exports = router;
