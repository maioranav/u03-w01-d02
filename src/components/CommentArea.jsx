import { Component } from "react";
import { AddComment } from "./AddComment";
import { CommentsList } from "./CommentsList";

export class CommentArea extends Component {
  render() {
    return (
      <>
        <h3>Comments Section:</h3>
        <h6>Select a book to read or leave a comment</h6>
        {this.props.asin !== null && (
          <>
            <AddComment asin={this.props.asin} />
            <CommentsList asin={this.props.asin} />
          </>
        )}
      </>
    );
  }
}
