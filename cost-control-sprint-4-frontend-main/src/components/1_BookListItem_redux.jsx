import React, { useEffect, useState } from "react";
import { deleteBook, getBookId } from "../../services/BookService";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
const BookListItem = () => {
  let dispatch = useDispatch();
  const [isAdmin, setAdmin] = useState(false);

  const setAsAdmin = (e) => {
    setAdmin(true);
  };
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

  const addToCart = (e) => {
    console.log(book);
    dispatch(add(book));
    //till the time action is not dispatched store will not run the reducer to update the state
  };
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Book Title{book.title}</Card.Title>
          <Card.Text>{book.dateOfPublishing}</Card.Text>
          {isAdmin ? (
            <div>
              <Button onClick={editBook} variant="primary">
                Edit
              </Button>
              <Button onClick={deleteBk} variant="danger">
                Delete
              </Button>
            </div>
          ) : (
            <Button onClick={addToCart} variant="primary">
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>

      <button onClick={setAsAdmin}>Click if Admin</button>
    </div>
  );
};

export default BookListItem;
