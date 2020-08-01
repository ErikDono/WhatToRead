const axios = require("axios");
module.exports = {
  savePost: (req, res) => {
    res.json({ success: "reached controller" });
  },
  getAllBooks: (req, res) => {
    res.json({ success: true });
  },
};
