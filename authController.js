const User = require('../models/User');
const Role = require('../models/Role');

exports.register = async (req, res) => {
  try {
    const { username, password, roleName } = req.body;

    // Find role
    const role = await Role.findOne({ name: roleName });
    if (!role) return res.status(400).json({ message: 'Role not found' });

    // Create user
    const user = new User({ username, password, role: role._id });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};
