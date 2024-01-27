const signupController = (req, res) => {
  res.send('HELLO SIGNUP');
};

const signinController = (req, res) => {
  res.send('HELLO SIGNIN');
};

module.exports = {
  signupController,
  signinController,
};
