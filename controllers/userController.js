const db = require("../models");

module.exports = {
  //can find all or pass in a 
  findAll: function (req, res) {
    db.User
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function (req, res) {
    db.User
      .find(req.params.user)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSaved: function (req, res) {
    db.User
      .findOne({ googleId: req.params.user }, 'saved')
      .populate('saved')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSubmitted: function (req, res) {
    db.User
      .findOne({ googleId: req.params.user }, 'submitted')
      .populate('submitted')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveQuestion: function (req, res) {
    db.User
      .findOneAndUpdate({ googleId: req.body.uid }, { $push: { saved: req.body.qid } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  submitQuestion: function (req, res) {
    db.User
      .findOneAndUpdate({ googleId: req.body.uid }, { $push: { submitted: req.body.qid } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteQuestion: function (req, res) {
    db.User
      .findOneAndUpdate({ googleId: req.body.uid }, { $pull: { saved: req.body.qid } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}