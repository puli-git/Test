//what is the url in the back end

//http://localhost:8080/api/books

//fetch books ,all books , book by id ,post book , put book ,delete book

//localhost  3000  -- fetch something from localhost:8080  -apis
//fetch api -- Promise  , returns json Promise again extract the data

//axios to fetch or put  post delete

import axios from "axios";

let url = "http://localhost:8080/api/books";

//any function can be declared as async
export async function getAllBooks() {
  //I have to await for the axios call of get from the url
  const response = await axios.get(`${url}`);

  const books = response.data;

  return books;
}

//get Book by id means fetching from the url based on the parameter value
export async function getBookId(id) {
  //I have to await for the axios call of get from the url
  const response = await axios.get(`${url}/${id}`);

  const book = response.data;

  return book;
}

export async function addBook(book) {
  const response = await axios.post(`${url}`, book);
  const newlyAddedBook = response.data;
  return newlyAddedBook;
}

export async function updateBook(id, book) {
  let response = await axios.put(`${url}/${id}`, book);

  const updatedBook = response.data;

  return updatedBook;
}
export async function deleteBook(id) {
  let response = await axios.delete(`${url}/${id}`);

  const delBook = response.data;

  return delBook;
}
