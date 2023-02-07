import { Component } from "react";
import { Container, Row, ButtonGroup, Button, Card } from "react-bootstrap";
import fantasy from "../jsonlib/fantasy.json";
import history from "../jsonlib/history.json";
import horror from "../jsonlib/horror.json";
import romance from "../jsonlib/romance.json";
import scifi from "../jsonlib/scifi.json";

class AllTheBooks extends Component {
  state = {
    genre: null,
    books: null,
  };
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center my-5">
            <ButtonGroup aria-label="Select Books Genre">
              <h2 className="mr-3">Scegli un genere: </h2>
              <Button
                onClick={() =>
                  this.setState({ genre: "Fantasy", books: fantasy })
                }
              >
                Fantasy
              </Button>
              <Button
                onClick={() =>
                  this.setState({ genre: "History", books: history })
                }
              >
                History
              </Button>
              <Button
                onClick={() =>
                  this.setState({ genre: "Horror", books: horror })
                }
              >
                Horror
              </Button>
              <Button
                onClick={() =>
                  this.setState({ genre: "Romance", books: romance })
                }
              >
                Romance
              </Button>
              <Button
                onClick={() => this.setState({ genre: "SciFi", books: scifi })}
              >
                SciFi
              </Button>
            </ButtonGroup>
          </Row>
          {this.state.books && (
            <>
              <Row>
                <h2 className="mb-2">Libri del genere {this.state.genre}</h2>
              </Row>
              <Row className="justify-content-between">
                {this.state.books.map((book) => (
                  <Card style={{ width: "18rem", marginBottom: "2rem" }}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>ASIN: {book.asin}</Card.Text>
                      <Button variant="danger">
                        {book.price.toFixed(2)} €
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            </>
          )}
        </Container>
      </>
    );
  }
}
export default AllTheBooks;
