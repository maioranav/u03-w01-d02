import { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
    elementId: this.props.asin,
  };

  handleState = (e) => {
    if (e.target.id === "commentInput") {
      this.setState({ ...this.state, comment: e.target.value });
    } else {
      this.setState({ ...this.state, rate: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.SubmitComment();
  };

  SubmitComment = async () => {
    try {
      let postComment = await fetch(process.env.REACT_APP_BASEURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_AUTHTOKEN,
        },
        body: JSON.stringify(this.state),
      });
      console.log(postComment);
      postComment.ok !== false ? alert("Grazie per il tuo commento!") : alert("Qualcosa è andato storto!");
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <Form className="mt-5" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="text" id="commentInput" placeholder="Inserisci commento" value={this.state.comment} onChange={this.handleState} />
        </Form.Group>
        <Form.Control as="select" className="mb-3" onChange={this.handleState} style={{ marginRight: "20px", display: "inline-block", width: "30%" }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}
