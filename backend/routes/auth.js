const express = require('express');
const { registerUser } = require('../controllers/authController'); // Ensure correct path
const router = express.Router();

router.post('/register', registerUser); // POST route for /api/auth/register

module.exports = router;
