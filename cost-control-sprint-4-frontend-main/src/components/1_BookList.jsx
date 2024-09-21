import React, { useEffect, useState } from "react";
import { getAllBooks } from "../../services/BookService";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import BookListItem from "./BookListItem";
import { Button } from "react-bootstrap";
//render here the books fetched from the db

//I want to get all the books by calling the BookService method getAllBooks
const BookList = () => {
  const [books, setBooks] = useState([]);
  //3 stages in the life of the component
  //if I want the list to populate at the mounting stage
  //main stages -- Mounting , Updating or Re-rendering ,Unmounting
  useEffect(() => {
    getAllBooks().then((res) => setBooks(res));
  }, []);
  //if the dependency array is empty in useEffect , so at which stage
  //is the API call done
  //Mounting or Re-rendering

  return (
    <>
      <div className="container">
        <div className="row-mt-5">
          <div className="col-md-8">
            <ul className="list-group list-group-flush">
              {books.length &&
                books.map((book) => (
                  <li key={book.id} className="list-group-item">
                    <NavLink to={`/books/${book.id}`}>
                      <h3>{book.title}</h3>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <Link to="/books/add">
            <Button variant="primary">Add A Book</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookList;
