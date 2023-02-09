import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { CommentArea } from "./CommentArea";

export class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleState = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Card className={this.state.selected === true ? "cardselezione" : ""} style={{ width: "18rem", marginBottom: "2rem" }} key={this.props.asin}>
        <Card.Img className="w-100" variant="top" src={this.props.img} onClick={this.handleState} />
        <Card.Body className="d-flex flex-column h-100 justify-content-between">
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>ASIN: {this.props.asin}</Card.Text>
          <Button variant="danger">Price: {this.props.price} €</Button>
          {this.state.selected && <CommentArea asin={this.props.asin} />}
        </Card.Body>
      </Card>
    );
  }
}
