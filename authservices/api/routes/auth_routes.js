const express = require('express');
const router = express.Router();

const {
    signIn,
    signUp
} = require('./../controllers/auth_controller')

router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;