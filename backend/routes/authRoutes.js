const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', (req, res) => {
    console.log('Register route hit');
    authController.registerUser(req, res);
  });
  
  router.post('/login', (req, res) => {
    console.log('Login route hit');
    authController.loginUser(req, res);
  });

  // Assuming you are using JWT token for authorization
router.get('/profile', authController.getUserProfile);

  
// router.post('/register', authController.registerUser);
// router.post('/login', authController.loginUser);

module.exports = router;
