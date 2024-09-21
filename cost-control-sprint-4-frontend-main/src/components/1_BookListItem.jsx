import React, { useEffect, useState } from "react";
import { deleteBook, getBookId } from "../../services/BookService";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
const BookListItem = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [book, setBook] = useState({});

  //mounting  -- [ ]
  //re-rendering -  [] ,when id changes

  useEffect(() => {
    getBookId(id).then((res) => setBook(res));
  }, [id]);
  //do you want to re-render the component with thenew book details when the id changes

  const editBook = (e) => {
    navigate(`/books/${id}/update`);
  };

  const deleteBk = (e) => {
    deleteBook(id).then((res) => navigate("/books"));
  };
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Book Title{book.title}</Card.Title>
          <Card.Text>{book.dateOfPublishing}</Card.Text>
          <Button onClick={editBook} variant="primary">
            Edit
          </Button>
          <Button onClick={deleteBk} variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookListItem;
