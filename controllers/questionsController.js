const db = require("../models");

module.exports = {
  //can find all or pass in a 
  findAll: function(req, res) {
    db.Question 
      .find(req.query)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCompany: function(req, res) {
    console.log(req.params.company);
    db.Question 
      .find({company: req.params.company})
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCategory: function(req, res) {
    console.log(req.body)
    db.Question 
      .find({questionType: req.params.category})
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Question
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Question
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Question
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  allCategories: function(req, res) {
    db.Question
      .find()
      .distinct('questionType')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  thumbsUpGet: function(req, res) {
    db.Question
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  thumbsUpSet: function(req, res) {
    db.Question
      .find({ _id: req.params.id }, "yesScore")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


}

