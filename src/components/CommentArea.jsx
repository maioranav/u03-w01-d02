import { Component } from "react";
import { AddComment } from "./AddComment";
import { CommentsList } from "./CommentsList";

export class CommentArea extends Component {
  state = {
    needUpdate: false,
  };

  commentUpdate = () => {
    this.setState({ ...this.state, needUpdate: true });
  };

  updated = () => {
    this.setState({ ...this.state, needUpdate: false });
  };

  render() {
    return (
      <>
        <h3>Comments Section:</h3>
        {this.props.asin !== null && (
          <>
            <AddComment asin={this.props.asin} update={this.commentUpdate} />
            <CommentsList asin={this.props.asin} needUpdate={this.state.needUpdate} update={this.commentUpdate} updated={this.updated} />
          </>
        )}
      </>
    );
  }
}
