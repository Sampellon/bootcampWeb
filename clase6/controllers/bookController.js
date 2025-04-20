const { getBookById } = require("../models/bookModel");

function showBookById(req, res) {
  const book = getBookById(req.params.id);
  res.render("book", { book });
}

module.exports = { showBookById };
