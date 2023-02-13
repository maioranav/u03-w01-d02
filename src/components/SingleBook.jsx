import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { CommentArea } from "./CommentArea";

export class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        className={this.props.selected === this.props.asin ? "cardselezione" : ""}
        style={{ width: "10rem", marginBottom: "2rem" }}
        key={this.props.asin}
      >
        <Card.Img className="w-100" variant="top" src={this.props.img} onClick={() => this.props.selState(this.props.asin)} />
        <Card.Body className="d-flex flex-column h-100 justify-content-between">
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>ASIN: {this.props.asin}</Card.Text>
          <Button variant="danger">{this.props.price} €</Button>
        </Card.Body>
      </Card>
    );
  }
}
