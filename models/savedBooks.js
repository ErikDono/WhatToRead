const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  synopsis: String,
  url: { type: String, require: true },
  image_link: { type: String },
});

const savedBooks = mongoose.model("savedBooks", savedSchema);

module.exports = savedBooks;
