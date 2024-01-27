const router = require('express').Router();

//controllers
const {
  signupController,
  signinController,
} = require('../../controllers/auth/auth.js');

router.get('/sign-up', signupController);

router.get('/sign-in', signinController);

module.exports = router;
