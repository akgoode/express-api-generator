'use strict';

const userId = '58b98d18d9a24ac354f7c2bd';

const mapBook = function (h) {
  let newBook = {};

  Object.keys(h).forEach(function () {
    newBook.author = h.author;
    newBook.title = h.title;
    newBook.originalLanguage = h.original_language;
    newBook.firstPublished = h.first_published;
    newBook._owner = userId;
  });

  return newBook;
};

module.exports = mapBook;
