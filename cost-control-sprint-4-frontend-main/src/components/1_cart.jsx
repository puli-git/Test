import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../../store/cartSlice";
const Cart = () => {
  let dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };
  const data = useSelector((state) => state.cart);

  const card = data.map((book) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
      <Card key={book.id}>
        <Card.Body>
          <Card.Title>Book Title{book.title}</Card.Title>
          <Card.Text>{book.dateOfPublishing}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="danger" onClick={() => removeFromCart(book.id)}>
            Remove From Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{card}</div>;
};

export default Cart;
