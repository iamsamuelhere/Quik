const router = require('express').Router();

//controllers
const menuController = require('../../controllers/menu/menu.js');

router.get('/', menuController);

module.exports = router;
