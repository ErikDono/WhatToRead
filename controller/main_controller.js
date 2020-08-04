const db = require("../models")
// create a model for the books
// add model to savePost
module.exports = {
  savePost: (req, res) => {
    db.Book.findOneAndUpdate(
      { title: req.params.title },
      req.body
    ).then((dbModel) => res.json(dbModel));
    res.json({ success: "reached controller" });
  },
  getAllBooks: (req, res) => {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
    res.json({ success: true });
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
  },
};
