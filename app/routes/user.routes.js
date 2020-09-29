module.exports = (app) => {
  const users = require('../controllers/user.controller.js');

  // Create a new User
  app.post('/api/postuser', users.create);

  // Retrieve all Users
  app.get('/api/getallusers', users.findAll);

  // Retrieve a single User with UserId
  app.get('/api/getuserbyid/:userId', users.findOne);

  // Update a User with UserId
  app.put('/api/updateuser/:userId', users.update);

  // Delete a User with UserId
  app.delete('/api/deleteuser/:userId', users.delete);
};
