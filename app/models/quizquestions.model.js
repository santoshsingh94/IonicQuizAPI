const mongoose = require('mongoose');

const QuizQuestionsSchema = mongoose.Schema(
  {
    question: String,
    maxTime: Number,
    options: {
      A: String,
      B: String,
      C: String,
      D: String,
    },
    answer: String,
  },
  {
    timestamps: true, //If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema, the type assigned is Date.
  }
);
module.exports = mongoose.model('QuizQuestions', QuizQuestionsSchema);
