const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      // unique: true
      // trim,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
      // match valid email
    },
    thoughts: [thoughtsId],
    friends: [userID],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;