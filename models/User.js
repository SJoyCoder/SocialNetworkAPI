const { Schema, model } = require('mongoose');
const Thoughts = require("./Thought");

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match valid email
      validate: {
        validator: function(email) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        },
        message: props => `${props.value} is not a valid email!`
      },
      required: [true, 'User email required']
    },
    thoughts: [thoughtsSchema.id],
    friends: [userSchema.id],
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
