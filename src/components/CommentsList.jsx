import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { SingleComment } from "./SingleComment";

export class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: false,
  };

  fetchComment = async (asin) => {
    try {
      let results = await fetch(process.env.REACT_APP_BASEURL + asin, {
        headers: {
          Authorization: process.env.REACT_APP_AUTHTOKEN,
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
          {this.state.comments.length > 0 && this.state.comments.map((c) => <SingleComment {...c} />)}
        </ul>
      </>
    );
  }
}
