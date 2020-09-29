const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: String,
    dob: String,
    country: String,
  },
  {
    timestamps: true, //If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema, the type assigned is Date.
  }
);
module.exports = mongoose.model('User', UserSchema);
