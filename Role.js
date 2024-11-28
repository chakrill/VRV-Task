const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [String] // List of permissions for the role
});

module.exports = mongoose.model('Role', roleSchema);
