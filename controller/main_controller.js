const axios = require("axios");
// create a model for the books
// add model to savePost
module.exports = {
  savePost: (req, res) => {
      
    res.json({ success: "reached controller" });
  },
  getAllBooks: (req, res) => {
    //   make call to database
    res.json({ success: true });
  },
};
