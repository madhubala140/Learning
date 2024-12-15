const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Placeholder response (would save user to DB here)
    res.status(201).json({
      message: 'User registered successfully',
      user: { name, email, password: hashedPassword },
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

module.exports = { registerUser };
