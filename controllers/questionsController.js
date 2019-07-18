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
    db.Question 
      .find(req.params.company)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

}