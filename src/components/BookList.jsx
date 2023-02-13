import { Component } from "react";
import { Container, Row, Form } from "react-bootstrap";
import { SingleBook } from "./SingleBook";

export class BookList extends Component {
  state = {
    books: this.props.booklist,
    searched: this.props.booklist,
    selected: null,
  };

  filterBookList = async (e) => {
    if (e === "") {
      await this.setState({ ...this.state, searched: this.state.books });
    } else {
      let risultati = this.state.books.filter((book) => book.title.toLowerCase().includes(e.toLowerCase()));
      await this.setState({ ...this.state, searched: risultati });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>What are you looking for?</Form.Label>
              <Form.Control type="text" placeholder="Enter the book name" onChange={(e) => this.filterBookList(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row className="justify-content-center justify-content-md-between">
          {this.state.searched.map(({ asin, price, title, img }, i) => (
            <SingleBook
              asin={asin}
              price={price.toFixed(2)}
              title={title}
              img={img}
              selected={this.props.selected}
              selState={this.props.handleState}
              key={`books-${asin}`}
            />
          ))}
          <SingleBook />
        </Row>
      </Container>
    );
  }
}
