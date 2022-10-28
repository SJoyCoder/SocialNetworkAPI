const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      organization: Types.ObjectId,
      default: Types.ObjectId
    },
    reactionBody: {
      type: String,
      max: 280,
      required: true,
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use getter method to format timestamp COPY PASTE FROM THOUGHT
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;
