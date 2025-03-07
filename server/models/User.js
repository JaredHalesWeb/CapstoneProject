/ models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  telephone: { type: String },
  address: { type: String },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
});
// Hash password before saving to ensure security
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});
module.exports = mongoose.model('User', UserSchema);