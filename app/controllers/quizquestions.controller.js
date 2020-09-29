const QuizQuestions = require('../models/quizquestions.model');

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.question) {
    return res.status(400).send({
      message: 'Question can not be empty',
    });
  }

  // Create a record
  const quizquestions = new QuizQuestions({
    question: req.body.question,
    maxTime: req.body.maxTime,
    options: {
      A: req.body.options.A,
      B: req.body.options.B,
      C: req.body.options.C,
      D: req.body.options.D,
    },
    answer: req.body.answer,
  });
  // Save record in the database
  quizquestions
    .save()
    .then((data) => {
      //res.send(data);
      res.status(201).json(data._id);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the QuizQuestion.',
      });
    });
  console.log('Created successfully');
};
// Retrieve and return all records from the database.
exports.findAll = (req, res) => {
  QuizQuestions.find()
    .then((questions) => {
      res.send(questions);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving quizquestions.',
      });
    });
};
