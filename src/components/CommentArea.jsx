import { Component } from "react";
import { AddComment } from "./AddComment";
import { CommentsList } from "./CommentsList";

export class CommentArea extends Component {
  state = {
    asin: this.props.asin,
  };
  render() {
    return (
      <>
        <AddComment asin={this.state.asin} />
        <CommentsList asin={this.state.asin} />
      </>
    );
  }
}
