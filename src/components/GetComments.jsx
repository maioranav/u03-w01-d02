import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { DeleteComment } from "./DeleteComment";

export class GetComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: false,
  };

  fetchComment = async (asin) => {
    try {
      let results = await fetch("https://strivesch0ool-api.herokuapp.com/api/comments/" + asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZTQ1N2EyNDc4ZDAwMTNhMDU3ZjQiLCJpYXQiOjE2NzU5NDc0NDcsImV4cCI6MTY3NzE1NzA0N30.dLC47vqDLv1wEm6K_Y7ks50t-3s-_Z2EABONKbknvvA",
        },
      });
      let data = await results.json();
      await this.setState({ ...this.state, comments: data, isLoading: false });
    } catch (e) {
      this.setState({ ...this.state, error: true, isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchComment(this.props.asin);
  }

  render() {
    return (
      <>
        <h6 className="mt-3">Commenti: </h6>
        {this.state.isLoading && <Spinner animation="border" variant="danger" />}
        {this.state.error && <Alert variant="danger"> C'è stato un errore nell'elaborare la richiesta!</Alert>}
        <ul className="elencoCommenti p-0">
          {this.state.error === false && this.state.isLoading === false && this.state.comments.length < 1 && (
            <li>Non ci sono commenti su questo libro.</li>
          )}
          {this.state.comments.length > 0 &&
            this.state.comments.map((c) => (
              <li key={c._id}>
                <DeleteComment cId={c._id} /> <span className="valutazione">{c.rate}</span> {c.comment}
              </li>
            ))}
        </ul>
      </>
    );
  }
}
