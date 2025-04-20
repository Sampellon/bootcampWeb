const readData = require("../utils/readData");

function getBookById(id) {
  const data = readData();
  return data.books.find(book => book.id === parseInt(id));
}

module.exports = { getBookById };
