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
    console.log("hello");
    db.Question 
      .find({company: req.params.company})
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCategory: function(req, res) {
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
  }

}

//figure out how to have user questions save to account
