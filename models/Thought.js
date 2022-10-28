const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //use gettter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: 
      //arry of nested documents created with the reactionSchema
    [thoughtSchema.reactions]
    ,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

reactionSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
