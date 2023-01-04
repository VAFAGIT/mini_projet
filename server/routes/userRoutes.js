const express = require('express');
const router = express();
const { 
    register,
    Login,

} = require('../controller/userController');

router.post('/register', register);
router.post('/login', Login);


module.exports = router;
