const axios = require("axios");
module.exports = {
  savePost: (req, res) => {
    res.json({ success: "reached controller" });
  },
  getAllBooks: (req, res) => {
    console.log(req.body)
    subjectSearch= req.body
    const books = axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=+subject:" +
        subjectSearch +
        "&key=AIzaSyB_qVUwrTtb7vLduMA6jovLXJTJW8UBiIE"
    );
    res.json({ success: true });
  },
};
