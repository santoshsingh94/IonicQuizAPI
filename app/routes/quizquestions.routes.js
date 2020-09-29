module.exports = (app) => {
  const quizequestion = require('../controllers/quizquestions.controller');

  // Create a new Question
  app.post('/api/postquestion', quizequestion.create);
  // Retrieve all Question
  app.get('/api/getallquizquestion', quizequestion.findAll);
};
