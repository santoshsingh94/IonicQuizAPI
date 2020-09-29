const User = require('../models/user.model.js');

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: 'User name can not be empty',
    });
  }

  // Create a record
  const user = new User({
    name: req.body.name,
    dob: req.body.dob,
    country: req.body.country,
  });

  // Save record in the database
  user
    .save()
    .then((data) => {
      //res.send(data);
      res.status(201).json(data._id);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      });
    });
  console.log('Posted successfully');
};

// Retrieve and return all records from the database.
exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};

// Find a single record with a Id
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'Record not found with id ' + req.params.userId,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Record not found with id ' + req.params.userId,
        });
      }
      return res.status(500).send({
        message: 'Error retrieving record with id ' + req.params.userId,
      });
    });
};

// Update a record identified by the recordId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: 'user name can not be empty',
    });
  }
  // Find record and update it with the request body
  User.findByIdAndUpdate(
    req.params.userId,
    {
      name: req.body.name,
      dob: req.body.dob,
      country: req.body.country,
    },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'user not found with id ' + req.params.userId,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'user not found with id ' + req.params.userId,
        });
      }
      return res.status(500).send({
        message: 'Error while updating record with id ' + req.params.userId,
      });
    });
};

// Delete a record with the specified recordId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'record not found with id ' + req.params.userId,
        });
      }
      res.send({ message: 'user deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'user not found with id ' + req.params.userId,
        });
      }
      return res.status(500).send({
        message: 'user not delete record with id ' + req.params.userId,
      });
    });
};
