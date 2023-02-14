import { useState } from "react";
import { Container, Row, Form } from "react-bootstrap";
import { SingleBook } from "./SingleBook";

export const BookList = (props) => {
  const [state, setState] = useState({
    books: props.booklist,
    searched: props.booklist,
    selected: null,
  });

  const filterBookList = async (evento) => {
    if (evento === "") {
      setState({ ...state, searched: props.booklist });
    } else {
      let risultati = await state.books.filter((book) => book.title.toLowerCase().includes(evento.toLowerCase()));
      setState({ ...state, searched: risultati });
    }
  };

  return (
    <Container>
      <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>What are you looking for?</Form.Label>
            <Form.Control type="text" placeholder="Enter the book name" onChange={(e) => filterBookList(e.target.value)} />
          </Form.Group>
        </Form>
      </Row>
      <Row className="justify-content-center justify-content-md-between">
        {state.searched.map(({ asin, price, title, img }, i) => (
          <SingleBook
            asin={asin}
            price={price.toFixed(2)}
            title={title}
            img={img}
            selected={props.selected}
            selState={props.handleState}
            key={`books-${asin}`}
          />
        ))}
        <SingleBook />
      </Row>
    </Container>
  );
};
